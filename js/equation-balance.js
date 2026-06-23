// ============================================================
// js/equation-balance.js — "Laboratoire d'Équations" interactif
// ============================================================
// Module autonome, multi-instance, déclenché par un tag
// [[BALANCE:équation]] ou [[BALANCE]] (génère aléatoirement)
// trouvé dans le HTML d'un cours ou d'un QCM.
//
// Utilisation :
//   1. Charger ce fichier + css/equation-balance.css
//   2. Après avoir injecté du HTML contenant [[BALANCE:...]] dans
//      un conteneur, appeler : initEquationBalances(container)
//
// Le moteur mathématique (classe Fraction, logique d'état, rendu
// de la balance) est repris du fichier original equations_balance.html,
// simplement rendu réentrant : toutes les variables globales sont
// devenues des propriétés de chaque instance, et tous les IDs DOM
// sont préfixés par un identifiant unique pour permettre plusieurs
// balances sur la même page sans collision.
// ============================================================

(function () {

    // --- MOTEUR DE FRACTIONS PUR (inchangé) ---
    class Fraction {
        constructor(num, den = 1) {
            if (num instanceof Fraction) {
                this.n = num.n;
                this.d = num.d;
                return;
            }
            if (den === 0) throw new Error("Division par zéro");
            let precision = 1000000;
            let n = Math.round(num * precision);
            let d = den * precision;
            const common = this.gcd(Math.abs(n), Math.abs(d));
            const sign = (n * d < 0) ? -1 : 1;
            this.n = sign * Math.abs(n) / (common || 1);
            this.d = Math.abs(d) / (common || 1);
        }
        gcd(a, b) { return b ? this.gcd(b, a % b) : a; }
        toNumber() { return this.n / this.d; }
        add(f) { return new Fraction(this.n * f.d + f.n * this.d, this.d * f.d); }
        sub(f) { return new Fraction(this.n * f.d - f.n * this.d, this.d * f.d); }
        mul(f) { return new Fraction(this.n * f.n, this.d * f.d); }
        div(f) {
            if (f.n === 0) throw new Error("Division par zéro");
            return new Fraction(this.n * f.d, this.d * f.n);
        }
        toString() {
            if (this.d === 1) return `${this.n}`;
            return `\\left(\\frac{${this.n}}{${this.d}}\\right)`;
        }
    }


    // ── PARSEUR D'ÉQUATION ROBUSTE ──────────────────────────────────────
    // Remplace la regex fragile de la version d'origine (qui échouait sur
    // "x+7=20" car elle exigeait un x des deux côtés). Gère : "x", "-x",
    // "3x", "+5", l'absence totale de terme x ou de terme constant, les
    // termes constants placés avant le terme en x (ex: "7-x"), ET les
    // coefficients exprimés avec * ou / (ex: "5*x", "x/4", "2*3/4*x").

    /**
     * Évalue le coefficient d'un terme en x, ex: "5*" (venant de "5*x"),
     * "/4" (venant de "x/4"), "2*3/4*" (venant de "2*3/4*x"), "" (venant
     * de "x" seul), "-" (venant de "-x"). Le signe est géré séparément
     * par l'appelant et n'a donc plus besoin d'être présent ici.
     */
    function evalCoefficient(str) {
        if (str === '' || str === '+') return 1;
        if (str === '-') return -1;

        // Un coefficient comme "5*" a un opérateur orphelin en bout de
        // chaîne (c'est le signe de multiplication AVEC x, pas entre deux
        // nombres) : on le retire. Un coefficient comme "/4" commence par
        // un opérateur (x/4 = 1/4 * x) : on insère le "1" implicite.
        let s = str;
        if (/[*/]$/.test(s)) s = s.slice(0, -1);
        if (/^[*/]/.test(s)) s = '1' + s;

        if (s === '' || s === '+') return 1;
        if (s === '-') return -1;

        const tokens = s.match(/[+-]?[\d.]+|[*/]/g);
        if (!tokens || tokens.length === 0) return NaN;
        let result = parseFloat(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            const op = tokens[i], val = parseFloat(tokens[i + 1]);
            if (op === undefined || val === undefined || isNaN(val)) return NaN;
            if (op === '*') result *= val; else if (op === '/') result /= val;
        }
        return result;
    }

    /**
     * Évalue un terme constant (sans x) pouvant chaîner * et /, ex:
     * "20", "-15", "20/2", "3*4".
     */
    function evalNumericExpr(str) {
        if (str === '') return 0;
        const signMatch = str.match(/^[+-]/);
        const sign = signMatch ? signMatch[0] : '+';
        const rest = signMatch ? str.slice(1) : str;

        const tokens = rest.match(/[\d.]+|[*/]/g);
        if (!tokens || tokens.length === 0) return NaN;
        let result = parseFloat(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            const op = tokens[i], val = parseFloat(tokens[i + 1]);
            if (op === undefined || val === undefined || isNaN(val)) return NaN;
            if (op === '*') result *= val; else if (op === '/') result /= val;
        }
        return sign === '-' ? -result : result;
    }

    function parseEquationSide(raw) {
        let str = raw.trim().replace(/\s+/g, '');
        if (str === '') return { x: 0, c: 0 };
        if (!/^[+-]/.test(str)) str = '+' + str;

        // Découpe en termes signés, mais en évitant de couper un "+"/"-"
        // qui appartiendrait à un exposant ou serait collé à * ou / (cas
        // non utilisés ici, donc une coupe simple sur +/- en tête de
        // terme reste correcte pour des coefficients linéaires).
        const terms = str.match(/[+-][^+-]+/g) || [];
        let x = 0, c = 0;
        terms.forEach(t => {
            const sign = t[0]; // '+' ou '-'
            const body = t.slice(1);
            if (body.toLowerCase().includes('x')) {
                const coefStr = body.toLowerCase().replace('x', '');
                const coefVal = evalCoefficient(coefStr);
                x += (sign === '-' ? -1 : 1) * coefVal;
            } else {
                const numVal = evalNumericExpr(body);
                c += (sign === '-' ? -1 : 1) * numVal;
            }
        });
        return { x, c };
    }

    /**
     * Parse une équation complète "gaucheside=droiteside" (ex: "3x-15=15x+30",
     * "x+7=20", "x-15=30", "5*x=20", "x/4=10") en { lx, lc, rx, rc }.
     * Retourne null si le format est invalide (pas de "=" ou parsing impossible).
     */
    function parseFullEquation(eqStr) {
        const parts = eqStr.split('=');
        if (parts.length !== 2) return null;
        const left = parseEquationSide(parts[0]);
        const right = parseEquationSide(parts[1]);
        if ([left.x, left.c, right.x, right.c].some(v => isNaN(v))) return null;
        return { lx: left.x, lc: left.c, rx: right.x, rc: right.c };
    }

    /**
     * Génère une équation aléatoire valide (lx !== rx pour garantir une
     * solution unique), identique à la logique de la version d'origine.
     */
    function generateRandomEquation() {
        let lx, lc, rx, rc;
        const rand = () => Math.floor(Math.random() * 19) - 9; // entre -9 et 9
        do {
            lx = rand(); lc = rand(); rx = rand(); rc = rand();
        } while (lx === rx);
        // _wasRandom est posé ICI (et non seulement au niveau de l'orchestrateur)
        // pour que resetInstance() puisse toujours distinguer une équation
        // générée aléatoirement d'une équation fixée par [[BALANCE:...]],
        // même après plusieurs réinitialisations successives.
        return { lx, lc, rx, rc, _wasRandom: true };
    }


    // ── CLASSE INSTANCE (un "Laboratoire d'Équations" autonome) ─────────
    class EquationBalanceInstance {
        constructor(rootEl, params, instanceId) {
            this.root = rootEl;
            this.id = instanceId;
            this.params = params; // { lx, lc, rx, rc }

            this.state = {
                left: { x: new Fraction(0), c: new Fraction(0) },
                right: { x: new Fraction(0), c: new Fraction(0) },
                isBalanced: true,
                pendingOp: null,
                pendingAction: null,
                history: [],
                initialState: null,
                previousTermsCount: 4,
                targetSolution: null,
            };

            this.buildDOM();
            this.setupInitialState();
            this.bindEvents();
            this.renderGrid();
            this.animateCubes('left', '+', Math.max(0, Math.min(9, Math.abs(this.params.lx) + Math.abs(this.params.lc))) || 4);
            this.animateCubes('right', '+', Math.max(0, Math.min(9, Math.abs(this.params.rx) + Math.abs(this.params.rc))) || 4);
        }

        // Génère un ID DOM préfixé unique pour cette instance
        eid(suffix) { return `eqbal-${this.id}-${suffix}`; }

        buildDOM() {
            this.root.innerHTML = `
                <div class="eqbal-container">
                    <h2>🧪 Laboratoire d'Équations</h2>
                    <p class="eqbal-intro">Applique la même opération des deux côtés pour maintenir l'équilibre, et isole la valeur de x.</p>

                    <div id="${this.eid('calc-grid')}" class="eqbal-grid"></div>

                    <div id="${this.eid('final-victory-msg')}" style="min-height: 60px; margin: 15px 0; font-size: 1.3rem; line-height: 1.4;"></div>

                    <div class="eqbal-main-interaction">
                        <div class="eqbal-control-panel">
                            <h4>GAUCHE</h4>
                            <div class="eqbal-input-group"><input type="text" id="${this.eid('in-left-val')}" inputmode="decimal" placeholder="ex: 3x ou 5"></div>
                            <div class="eqbal-button-grid">
                                <button data-side="left" data-op="+">+</button><button data-side="left" data-op="-">-</button>
                                <button data-side="left" data-op="*">×</button><button data-side="left" data-op="/">÷</button>
                            </div>
                        </div>

                        <div class="eqbal-balance-svg">
                            <div id="${this.eid('success-feedback')}" class="eqbal-success-feedback"></div>
                            <svg width="200" height="150" viewBox="0 0 200 150">
                                <path d="M90 150 L110 150 L100 100 Z" fill="#5D4037" />
                                <rect x="95" y="80" width="10" height="20" fill="#5D4037" />
                                <g id="${this.eid('beam-group')}" style="transition: transform 1s ease; transform-origin: 100px 100px; transform: rotate(0deg);">
                                    <rect x="20" y="95" width="160" height="6" rx="3" fill="#795548" />
                                    <g id="${this.eid('plateau-left')}">
                                        <line x1="20" y1="101" x2="20" y2="130" stroke="#333" stroke-width="2" />
                                        <rect x="5" y="130" width="30" height="5" fill="#455A64" />
                                        <g id="${this.eid('container-left')}"></g>
                                    </g>
                                    <g id="${this.eid('plateau-right')}">
                                        <line x1="180" y1="101" x2="180" y2="130" stroke="#333" stroke-width="2" />
                                        <rect x="165" y="130" width="30" height="5" fill="#455A64" />
                                        <g id="${this.eid('container-right')}"></g>
                                    </g>
                                </g>
                            </svg>
                            <div id="${this.eid('advice-msg')}" class="eqbal-advice-msg"></div>
                        </div>

                        <div class="eqbal-control-panel">
                            <h4>DROITE</h4>
                            <div class="eqbal-input-group"><input type="text" id="${this.eid('in-right-val')}" inputmode="decimal" placeholder="ex: 3x ou 5"></div>
                            <div class="eqbal-button-grid">
                                <button data-side="right" data-op="+">+</button><button data-side="right" data-op="-">-</button>
                                <button data-side="right" data-op="*">×</button><button data-side="right" data-op="/">÷</button>
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; justify-content: center; align-items: center; margin-top: 15px; gap: 15px;">
                        <label style="font-size: 1rem; cursor: pointer; display: flex; align-items: center; gap: 10px; padding: 10px;">
                            <span>Lien</span>
                            <input type="checkbox" id="${this.eid('check-link')}" style="width: 22px; height: 22px; cursor: pointer;">
                        </label>
                    </div>

                    <div class="eqbal-nav-buttons">
                        <button id="${this.eid('btn-undo')}" class="eqbal-btn-nav" style="display:none;">&#x2190;</button>
                    </div>

                    <button class="eqbal-btn-reset" id="${this.eid('btn-reset')}">Réinitialiser l'expérience</button>
                </div>
            `;
        }

        bindEvents() {
            this.root.querySelectorAll('button[data-side][data-op]').forEach(btn => {
                btn.addEventListener('click', () => this.applyOp(btn.dataset.side, btn.dataset.op));
            });
            this.root.querySelector(`#${this.eid('btn-undo')}`).addEventListener('click', () => this.undoLastStep());
            this.root.querySelector(`#${this.eid('btn-reset')}`).addEventListener('click', () => this.resetInstance());
        }

        resetInstance() {
            // Recrée une instance fraîche avec les mêmes paramètres (équation fixe)
            // ou de nouveaux paramètres aléatoires (équation non fixée à l'origine).
            const freshParams = this.params._wasRandom ? generateRandomEquation() : this.params;
            new EquationBalanceInstance(this.root, freshParams, this.id);
        }

        copyStateSide(side) {
            return { x: new Fraction(side.x.n, side.x.d), c: new Fraction(side.c.n, side.c.d) };
        }

        setupInitialState() {
            const p = this.params;
            this.state.initialState = {
                left: { x: new Fraction(p.lx), c: new Fraction(p.lc) },
                right: { x: new Fraction(p.rx), c: new Fraction(p.rc) }
            };
            this.state.left = this.copyStateSide(this.state.initialState.left);
            this.state.right = this.copyStateSide(this.state.initialState.right);
            this.state.previousTermsCount = this.countTerms();

            const denominator = this.state.left.x.n * this.state.right.x.d - this.state.right.x.n * this.state.left.x.d;
            if (denominator !== 0) {
                const rc = this.state.right.c.sub(this.state.left.c);
                const lx_rx = this.state.left.x.sub(this.state.right.x);
                this.state.targetSolution = rc.div(lx_rx);
            } else {
                this.state.targetSolution = null;
            }
        }

        countTerms() {
            const s = this.state, epsilon = 0.0001;
            let count = 0;
            if (Math.abs(s.left.x.toNumber()) > epsilon) count++;
            if (Math.abs(s.left.c.toNumber()) > epsilon) count++;
            if (Math.abs(s.right.x.toNumber()) > epsilon) count++;
            if (Math.abs(s.right.c.toNumber()) > epsilon) count++;
            return count;
        }

        formatTerm(frac, isX) {
            if (frac.n === 0) return "";
            let sign = frac.n > 0 ? "+" : "-";
            let absN = Math.abs(frac.n);
            let d = frac.d;
            let variable = isX ? "x" : "";
            if (d === 1) {
                if (absN === 1 && isX) return sign + "x";
                return `${sign}${absN}${variable}`;
            } else {
                return `${sign}\\left(\\frac{${absN}}{${d}}\\right)${variable}`;
            }
        }

        parseInput(inputStr, adviceEl) {
            inputStr = inputStr.replace(/\s+/g, '').toLowerCase();
            const validPattern = /^[+-]?(\d+(\.\d*)?|(\d*\.\d+)?)(x)?$/;
            if (!validPattern.test(inputStr) || inputStr === "" || inputStr === "+" || inputStr === "-") {
                if (adviceEl) {
                    adviceEl.innerHTML = "⚠️ Saisie incorrecte : tu ne peux entrer que des nombres, la lettre 'x' et les signes '+' ou '-'.";
                    adviceEl.style.color = "#dc3545";
                }
                throw new Error("Invalid Input");
            }
            let xVal = new Fraction(0), cVal = new Fraction(0);
            if (inputStr.includes('x')) {
                let coeffPart = inputStr.replace('x', '');
                let num;
                if (coeffPart === "" || coeffPart === "+") num = 1;
                else if (coeffPart === "-") num = -1;
                else num = parseFloat(coeffPart);
                xVal = new Fraction(num);
            } else {
                cVal = new Fraction(parseFloat(inputStr));
            }
            return { x: xVal, c: cVal };
        }

        showAdvice(msg, color) {
            const el = this.root.querySelector(`#${this.eid('advice-msg')}`);
            el.innerHTML = msg;
            el.style.color = color;
        }

        updateBalance(op, side) {
            const beam = this.root.querySelector(`#${this.eid('beam-group')}`);
            if (side === 'left') {
                beam.style.transform = (op === '+' || op === '*') ? "rotate(-15deg)" : "rotate(15deg)";
            } else {
                beam.style.transform = (op === '+' || op === '*') ? "rotate(15deg)" : "rotate(-15deg)";
            }
        }

        toggleButtons(side, enabled) {
            const panels = this.root.querySelectorAll('.eqbal-control-panel');
            const index = (side === 'left') ? 0 : 1;
            const buttons = panels[index].querySelectorAll('button');
            buttons.forEach(btn => btn.disabled = !enabled);
        }

        triggerAutoMirror(side, op, valSaisieNum) {
            const isLinked = this.root.querySelector(`#${this.eid('check-link')}`).checked;
            if (!isLinked) return;
            setTimeout(() => {
                const otherSide = (side === 'left') ? 'right' : 'left';
                const inputOpposite = this.root.querySelector(`#${this.eid('in-' + otherSide + '-val')}`);
                const wasX = this.state.pendingAction.type === 'x';
                inputOpposite.value = wasX ? (valSaisieNum.toNumber() + "x") : valSaisieNum.toNumber();
                this.applyOp(otherSide, op);
            }, 150);
        }

        animateCubes(side, op, valSaisieNum) {
            const container = this.root.querySelector(`#${this.eid('container-' + side)}`);
            const beam = this.root.querySelector(`#${this.eid('beam-group')}`);
            if (!container || !beam) return;

            let effectiveVal = (valSaisieNum === undefined || isNaN(valSaisieNum)) ? 3 : valSaisieNum;
            let color = "#007bff";
            const isRemoval = (op === '-' || op === '/');
            const currentCubesCount = container.children.length;
            let newTotalCount = 0;
            const isFirstLaunch = (currentCubesCount === 0);

            if (isRemoval) {
                newTotalCount = isFirstLaunch
                    ? Math.max(0, Math.floor(effectiveVal))
                    : Math.max(0, currentCubesCount - 1);
            } else {
                newTotalCount = isFirstLaunch
                    ? Math.min(16, Math.floor(effectiveVal))
                    : Math.min(16, currentCubesCount + 1);
            }

            if (isRemoval && currentCubesCount > 0) {
                const toRemove = Math.floor(effectiveVal);
                for (let i = 0; i < toRemove; i++) {
                    if (container.lastChild) {
                        const el = container.lastChild;
                        el.classList.remove("eqbal-cube-flying");
                        el.classList.add("eqbal-cube-leaving");
                        setTimeout(() => el.remove(), 500);
                    }
                }
                return;
            }

            if (newTotalCount > 0) {
                while (container.firstChild) container.removeChild(container.firstChild);
                const cubeSize = 6, spacing = 1, maxPerRow = 4;
                const totalWidthOfRow = (maxPerRow * cubeSize) + ((maxPerRow - 1) * spacing);
                const leftPlateauX = 20, rightPlateauX = 180, plateauY = 130, beamY = 95;
                const currentPlateauX = (side === 'left') ? leftPlateauX : rightPlateauX;
                const targetCenterX = currentPlateauX + 15;

                for (let i = 0; i < newTotalCount; i++) {
                    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                    const col = i % maxPerRow;
                    const row = Math.floor(i / maxPerRow);
                    const targetX = (targetCenterX - (totalWidthOfRow / 2)) + (col * (cubeSize + spacing));
                    const targetY = plateauY - (row * (cubeSize + spacing)) - cubeSize;
                    const startY = beamY;

                    rect.setAttribute("x", targetX - 15);
                    rect.setAttribute("y", startY - 10);
                    rect.setAttribute("width", cubeSize);
                    rect.setAttribute("height", cubeSize);
                    rect.setAttribute("fill", (op === '*') ? "#007bff" : color);
                    rect.setAttribute("class", "eqbal-cube eqbal-cube-flying");
                    container.appendChild(rect);
                    setTimeout(() => { rect.setAttribute("y", targetY); }, 50);
                }
            } else {
                while (container.firstChild) container.removeChild(container.firstChild);
            }
        }

        addEquationRow(container, left, right, className, eqSymbol, isActionLine = false, side = null, type = null, colorMode = 'black', isMultiTerm = false, customColumns = null, referenceOpSymbol = "", attemptOpSymbol = "") {
            const row = document.createElement('div');
            row.className = `eqbal-row ${className}`;

            if (isActionLine && colorMode === 'mismatch') {
                const isRefOnLeft = (side === 'left');
                const refSym = referenceOpSymbol, attSym = attemptOpSymbol;
                if (isRefOnLeft) {
                    row.innerHTML = `
                        <div style="grid-column: 1; color: blue; font-style: italic;">${refSym}</div>
                        <div style="grid-column: 2; color: blue; font-style: italic;">${refSym}</div>
                        <div style="grid-column: 3;">${eqSymbol}</div>
                        <div style="grid-column: 4; color: red; font-style: italic;">${attSym}</div>
                        <div style="grid-column: 5; color: red; font-style: italic;">${attSym}</div>`;
                } else {
                    row.innerHTML = `
                        <div style="grid-column: 1; color: red; font-style: italic;">${attSym}</div>
                        <div style="grid-column: 2; color: red; font-style: italic;">${attSym}</div>
                        <div style="grid-column: 3;">${eqSymbol}</div>
                        <div style="grid-column: 4; color: blue; font-style: italic;">${refSym}</div>
                        <div style="grid-column: 5; color: blue; font-style: italic;">${refSym}</div>`;
                }
                container.appendChild(row);
                return;
            }

            if (isActionLine && customColumns) {
                const color = colorMode === 'green' ? 'green' : 'blue';
                row.innerHTML = `
                    <div style="grid-column: 1; color: ${color}; font-style: italic;">${customColumns[0]}</div>
                    <div style="grid-column: 2; color: ${color}; font-style: italic;">${customColumns[1]}</div>
                    <div style="grid-column: 3;">${customColumns[2]}</div>
                    <div style="grid-column: 4; color: ${color}; font-style: italic;">${customColumns[3]}</div>
                    <div style="grid-column: 5; color: ${color}; font-style: italic;">${customColumns[4]}</div>`;
            } else if (isActionLine) {
                if (isMultiTerm) {
                    if (colorMode === 'blue') {
                        const colStart = (side === 'left') ? 1 : 4;
                        row.innerHTML = `
                            <div style="grid-column: ${colStart}; color: blue; font-style: italic;">${eqSymbol}</div>
                            <div style="grid-column: ${colStart + 1}; color: blue; font-style: italic;">${eqSymbol}</div>
                            <div style="grid-column: 3;"></div>
                            <div style="grid-column: ${colStart >= 4 ? 1 : 4};"></div>
                            <div style="grid-column: ${colStart >= 4 ? 2 : 5};"></div>`;
                    } else {
                        row.innerHTML = `
                            <div style="grid-column: 1; color: green; font-style: italic;">${eqSymbol}</div>
                            <div style="grid-column: 2; color: green; font-style: italic;">${eqSymbol}</div>
                            <div style="grid-column: 3;"></div>
                            <div style="grid-column: 4; color: green; font-style: italic;">${eqSymbol}</div>
                            <div style="grid-column: 5; color: green; font-style: italic;">${eqSymbol}</div>`;
                    }
                } else {
                    let col = (side === 'left') ? (type === 'x' ? 1 : 2) : (type === 'x' ? 4 : 5);
                    row.innerHTML = `<div style="grid-column: ${col}; color: ${colorMode === 'green' ? 'green' : 'blue'}; font-style: italic;">${eqSymbol}</div>`;
                }
            } else {
                if (!left || !right) return;
                const lX = this.formatTerm(left.x, true);
                const lC = this.formatTerm(left.c, false);
                const rX = this.formatTerm(right.x, true);
                const rC = this.formatTerm(right.c, false);
                row.innerHTML = `
                    <div style="grid-column: 1">\\(${lX}\\)</div>
                    <div style="grid-column: 2">\\(${lC}\\)</div>
                    <div style="grid-column: 3">${eqSymbol}</div>
                    <div style="grid-column: 4">\\(${rX}\\)</div>
                    <div style="grid-column: 5">\\(${rC}\\)</div>`;
            }
            container.appendChild(row);
        }

        renderGrid() {
            const grid = this.root.querySelector(`#${this.eid('calc-grid')}`);
            grid.innerHTML = "";
            const s = this.state;

            this.addEquationRow(grid, s.initialState.left, s.initialState.right, "eqbal-row-base", "=", false);

            s.history.forEach((step, index) => {
                if (step.isActionLine && step.colorMode === "green") {
                    const prevStep = s.history[index - 1] || s.initialState;
                    const epsilon = 0.0001;
                    let cols = ["", "", "", "", ""];

                    if (step.isMultiTerm) {
                        const leftXWasZero = Math.abs((prevStep.left?.x || s.initialState.left.x).toNumber()) < epsilon;
                        const leftCWasZero = Math.abs((prevStep.left?.c || s.initialState.left.c).toNumber()) < epsilon;
                        const rightXWasZero = Math.abs((prevStep.right?.x || s.initialState.right.x).toNumber()) < epsilon;
                        const rightCWasZero = Math.abs((prevStep.right?.c || s.initialState.right.c).toNumber()) < epsilon;
                        if (!leftXWasZero) cols[0] = step.opSymbol;
                        if (!leftCWasZero) cols[1] = step.opSymbol;
                        if (!rightXWasZero) cols[3] = step.opSymbol;
                        if (!rightCWasZero) cols[4] = step.opSymbol;
                    } else {
                        if (step.type === 'x') { cols[0] = step.opSymbol; cols[3] = step.opSymbol; }
                        else { cols[1] = step.opSymbol; cols[4] = step.opSymbol; }
                    }
                    this.addEquationRow(grid, step.left, step.right, "eqbal-row-act", "", true, step.side, step.type, 'green', step.isMultiTerm, cols);
                } else if (!step.isActionLine || step.colorMode === "black") {
                    this.addEquationRow(grid, step.left, step.right, "eqbal-row-base", "=", step.isActionLine);
                }
            });

            if (s.pendingAction) {
                if (s.pendingAction.colorMode === 'mismatch') {
                    let cols = ["", "", "", "", ""];
                    const isMulti = s.pendingAction.isMultiTerm;
                    const type = s.pendingAction.type;
                    if (isMulti) {
                        cols[0] = s.pendingAction.opSymbol;
                        cols[1] = s.pendingAction.opSymbol;
                        cols[3] = s.pendingAction.attemptOpSymbol;
                        cols[4] = s.pendingAction.attemptOpSymbol;
                    } else {
                        if (type === 'x') { cols[0] = s.pendingAction.opSymbol; cols[3] = s.pendingAction.attemptOpSymbol; }
                        else { cols[1] = s.pendingAction.opSymbol; cols[4] = s.pendingAction.attemptOpSymbol; }
                    }
                    this.addEquationRow(grid, null, null, "eqbal-row-act", "", true, s.pendingAction.side, s.pendingAction.type, 'mismatch', isMulti, cols, s.pendingAction.opSymbol, s.pendingAction.attemptOpSymbol);
                } else {
                    this.addEquationRow(grid, null, null, "eqbal-row-act", s.pendingAction.opSymbol, true, s.pendingAction.side, s.pendingAction.type, 'blue', s.pendingAction.isMultiTerm);
                }
            }

            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([grid]);
            }
        }

        applyOp(side, op) {
            try {
                const s = this.state;
                const inputEl = this.root.querySelector(`#${this.eid('in-' + side + '-val')}`);
                const rawInput = inputEl.value.trim().toLowerCase();

                const isDivisionByX = (op === '/' && rawInput.includes('x'));
                const isMultiplicationByX = (op === '*' && rawInput.includes('x'));
                if (isDivisionByX || isMultiplicationByX) {
                    const msg = isDivisionByX
                        ? `⚠️ Impossible de diviser par une inconnue (x) ! x pourrait être égal à 0.`
                        : `⚠️ Impossible de multiplier par une inconnue (x) ! Cela créerait une équation du second degré.`;
                    this.showAdvice(msg, "#dc3545");
                    inputEl.value = "";
                    return;
                }

                const adviceMsg = this.root.querySelector(`#${this.eid('advice-msg')}`);
                const successMsg = this.root.querySelector(`#${this.eid('success-feedback')}`);
                const finalvictorymsg = this.root.querySelector(`#${this.eid('final-victory-msg')}`);
                adviceMsg.innerHTML = "";
                successMsg.innerHTML = "";
                finalvictorymsg.innerHTML = "";

                const parsed = this.parseInput(rawInput, adviceMsg);
                const vx = parsed.x, vc = parsed.c;
                const valSaisieNum = (vx.n !== 0 || vx.d !== 1) ? vx : vc;
                const isX = (vx.n !== 0 || vx.d !== 1);
                const suffix = isX ? "x" : "";
                const opSymbol = op === '+' ? `\\(+${valSaisieNum.toNumber()}${suffix}\\)` :
                    (op === '-' ? `\\(-${Math.abs(valSaisieNum.toNumber())}${suffix}\\)` :
                    (op === '*' ? `\\(\\times ${valSaisieNum.toString()}${suffix}\\)` :
                    `\\(\\div ${valSaisieNum.toString()}${suffix}\\)`));

                let nextLeftX, nextLeftC, nextRightX, nextRightC;
                if (side === 'left') {
                    if (op === '+') { nextLeftX = s.left.x.add(vx); nextLeftC = s.left.c.add(vc); }
                    else if (op === '-') { nextLeftX = s.left.x.sub(vx); nextLeftC = s.left.c.sub(vc); }
                    else if (op === '*') { const f = (vx.n !== 0 || vx.d !== 1) ? vx : vc; nextLeftX = s.left.x.mul(f); nextLeftC = s.left.c.mul(f); }
                    else if (op === '/') { const d = (vx.n !== 0 || vx.d !== 1) ? vx : vc; nextLeftX = s.left.x.div(d); nextLeftC = s.left.c.div(d); }
                    nextRightX = s.right.x; nextRightC = s.right.c;
                } else {
                    if (op === '+') { nextRightX = s.right.x.add(vx); nextRightC = s.right.c.add(vc); }
                    else if (op === '-') { nextRightX = s.right.x.sub(vx); nextRightC = s.right.c.sub(vc); }
                    else if (op === '*') { const f = (vx.n !== 0 || vx.d !== 1) ? vx : vc; nextRightX = s.right.x.mul(f); nextRightC = s.right.c.mul(f); }
                    else if (op === '/') { const d = (vx.n !== 0 || vx.d !== 1) ? vx : vc; nextRightX = s.right.x.div(d); nextRightC = s.right.c.div(d); }
                    nextLeftX = s.left.x; nextLeftC = s.left.c;
                }

                if (s.isBalanced) {
                    s.isBalanced = false;
                    s.pendingOp = { side, op, valK: valSaisieNum.toNumber() };
                    s.pendingAction = {
                        opSymbol, side, type: isX ? 'x' : 'c',
                        nextLeft: { x: new Fraction(nextLeftX.n, nextLeftX.d), c: new Fraction(nextLeftC.n, nextLeftC.d) },
                        nextRight: { x: new Fraction(nextRightX.n, nextRightX.d), c: new Fraction(nextRightC.n, nextRightC.d) },
                        isActionLine: true,
                        isMultiTerm: (op === '*' || op === '/'),
                        colorMode: 'blue',
                    };
                    s.left = { x: nextLeftX, c: nextLeftC };
                    s.right = { x: nextRightX, c: nextRightC };
                    this.toggleButtons(side, false);
                    this.updateBalance(op, side);
                    this.animateCubes(side, op, valSaisieNum.toNumber());
                    this.renderGrid();
                    this.triggerAutoMirror(side, op, valSaisieNum);
                } else {
                    const isCorrectSide = (side !== s.pendingOp.side);
                    const isSameOp = (op === s.pendingOp.op);

                    if (isCorrectSide && isSameOp) {
                        if (Math.abs(valSaisieNum.toNumber() - s.pendingOp.valK) > 0.01) {
                            const attemptSym = op === '+' ? `\\(+${valSaisieNum.toNumber()}${suffix}\\)` :
                                (op === '-' ? `\\(-${Math.abs(valSaisieNum.toNumber())}${suffix}\\)` :
                                (op === '*' ? `\\(\\times ${valSaisieNum.toString()}${suffix}\\)` :
                                `\\(\\div ${valSaisieNum.toString()}${suffix}\\)`));

                            s.pendingAction = {
                                opSymbol: s.pendingAction.opSymbol,
                                side: s.pendingOp.side,
                                type: s.pendingAction.type,
                                isMultiTerm: (op === '*' || op === '/'),
                                colorMode: 'mismatch',
                                attemptOpSymbol: attemptSym
                            };
                            s.isBalanced = false;
                            this.showAdvice(`⚠️ Attention, tu n'as pas rentré la même valeur que de l'autre côté ! Tu as déséquilibré l'équation.`, "#dc3545");
                            this.toggleButtons('left', false);
                            this.toggleButtons('right', false);
                            this.root.querySelector(`#${this.eid('btn-undo')}`).style.display = "block";
                            this.renderGrid();
                            return;
                        } else {
                            s.history.push({
                                left: null, right: null,
                                opSymbol: s.pendingAction.opSymbol,
                                isActionLine: true, colorMode: 'green',
                                isMultiTerm: s.pendingAction.isMultiTerm,
                                side: s.pendingAction.side, type: s.pendingAction.type
                            });
                            s.history.push({
                                left: { x: new Fraction(nextLeftX.n, nextLeftX.d), c: new Fraction(nextLeftC.n, nextLeftC.d) },
                                right: { x: new Fraction(nextRightX.n, nextRightX.d), c: new Fraction(nextRightC.n, nextRightC.d) },
                                opSymbol: "=", isActionLine: false, colorMode: "black"
                            });

                            s.left = { x: nextLeftX, c: nextLeftC };
                            s.right = { x: nextRightX, c: nextRightC };
                            s.isBalanced = true;
                            s.pendingOp = null;
                            s.pendingAction = null;

                            const allControlButtons = this.root.querySelectorAll('.eqbal-control-panel button');
                            const isCycleStarting = Array.from(allControlButtons).every(btn => !btn.disabled);
                            if (isCycleStarting) s.previousTermsCount = this.countTerms();

                            this.toggleButtons('left', true);
                            this.toggleButtons('right', true);
                            this.root.querySelector(`#${this.eid('beam-group')}`).style.transform = "rotate(0deg)";
                            this.animateCubes(side, op, valSaisieNum.toNumber());

                            const isTargetForm = (
                                (Math.abs(s.left.x.n / s.left.x.d - 1) < 0.01 && s.left.c.n === 0 && s.right.x.n === 0) ||
                                (Math.abs(s.right.x.n / s.right.x.d - 1) < 0.01 && s.right.c.n === 0 && s.left.x.n === 0)
                            );

                            if (isTargetForm) {
                                const sol = s.targetSolution;
                                const solLaTeX = sol.toString();
                                const eqInit = `\\(${this.formatTerm(s.initialState.left.x, true)}${this.formatTerm(s.initialState.left.c, false)} = ${this.formatTerm(s.initialState.right.x, true)}${this.formatTerm(s.initialState.right.c, false)}\\)`;
                                finalvictorymsg.innerHTML = `🎉 Félicitations ! Tu as trouvé la solution de l'équation ${eqInit} : <br><strong>\\(x = \\mathbf{${solLaTeX}}\\)</strong>`;
                                finalvictorymsg.style.color = "#28a745";
                                this.root.querySelector('.eqbal-balance-svg').innerHTML = `<div style="font-size: 4rem;">🎉</div>`;
                                this.toggleButtons('left', false);
                                this.toggleButtons('right', false);

                                // ── Hook gamification : déclenche un callback optionnel ──
                                if (typeof this.onSolved === 'function') {
                                    this.onSolved(sol.toNumber());
                                }
                            } else {
                                const currentTerms = this.countTerms();
                                successMsg.style.color = "#28a745";
                                if (currentTerms < s.previousTermsCount) {
                                    successMsg.innerHTML = `✅ Bravo ! L'équilibre est rétabli.<br>Et tu as réussi à éliminer un terme 🎉!`;
                                } else if (currentTerms === s.previousTermsCount) {
                                    successMsg.innerHTML = ` Bravo ! L'équilibre est rétabli, mais tu as encore ${currentTerms} termes.<br>💡 Choisis ta prochaine opération pour en éliminer un !`;
                                    successMsg.style.color = "#e67e22";
                                } else {
                                    successMsg.innerHTML = `⚠️ L'équilibre est rétabli, mais tu as aggravé la situation : <br> Tu avais ${s.previousTermsCount} termes et maintenant tu en as ${currentTerms}.<br>Tu peux continuer ou revenir en arrière.`;
                                    successMsg.style.color = "#dc3545";
                                }
                                this.root.querySelector(`#${this.eid('btn-undo')}`).style.display = "block";
                            }
                        }
                    } else {
                        this.showAdvice(`💡Pour maintenir l'équilibre, tu dois effectuer la <b>même opération</b> sur l'autre côté.`, "#e67e22");
                    }
                }

                if (document.activeElement && document.activeElement.tagName === 'INPUT') {
                    document.activeElement.blur();
                }
                this.renderGrid();
                if (window.MathJax && window.MathJax.typesetPromise) {
                    window.MathJax.typesetPromise([this.root.querySelector(`#${this.eid('calc-grid')}`)]);
                    setTimeout(() => {
                        window.MathJax.typesetPromise([this.root.querySelector(`#${this.eid('calc-grid')}`), finalvictorymsg]);
                    }, 10);
                }
            } catch (e) {
                if (e.message !== "Invalid Input") console.error("[EquationBalance] Erreur inattendue :", e);
            }
        }

        undoLastStep() {
            const s = this.state;
            if (s.history.length > 0) {
                const lastElement = s.history[s.history.length - 1];
                if (lastElement.colorMode === "black" || lastElement.isActionLine === false) {
                    s.history.pop();
                    s.history.pop();
                } else {
                    s.history.pop();
                }

                const lastStableStep = [...s.history].reverse().find(step => step.isActionLine === false);
                if (lastStableStep) {
                    s.left = this.copyStateSide(lastStableStep.left);
                    s.right = this.copyStateSide(lastStableStep.right);
                    s.isBalanced = true;
                } else {
                    s.left = this.copyStateSide(s.initialState.left);
                    s.right = this.copyStateSide(s.initialState.right);
                    s.isBalanced = true;
                }

                this.root.querySelector(`#${this.eid('advice-msg')}`).innerHTML = "";
                this.root.querySelector(`#${this.eid('success-feedback')}`).innerHTML = "";
                this.root.querySelector(`#${this.eid('final-victory-msg')}`).innerHTML = "";
                s.pendingOp = null;
                s.pendingAction = null;
                this.root.querySelector(`#${this.eid('beam-group')}`).style.transform = "rotate(0deg)";
                this.toggleButtons('left', true);
                this.toggleButtons('right', true);
                this.renderGrid();
            } else {
                this.resetInstance();
            }
        }
    }


    // ── ORCHESTRATEUR : détection des tags [[BALANCE:...]] dans le DOM ──
    let _instanceCounter = 0;

    /**
     * Scanne `container` (un élément DOM déjà inséré dans la page) à la
     * recherche de texte [[BALANCE:équation]] ou [[BALANCE]], et remplace
     * chaque occurrence par une instance interactive du laboratoire
     * d'équations. À appeler juste après avoir injecté du HTML contenant
     * potentiellement ces tags (cours ou QCM).
     *
     * @param {HTMLElement} container
     * @param {function} [onSolved] - callback(solutionValue, eqString) optionnel,
     *        appelé quand une instance est résolue (utile pour la gamification).
     */
    function initEquationBalances(container, onSolved) {
        if (!container) return;

        // On cherche le tag dans les nœuds texte pour ne pas casser le HTML existant
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
        const matches = [];
        let node;
        const tagRegex = /\[\[BALANCE(?::([^\]]*))?\]\]/g;

        while ((node = walker.nextNode())) {
            if (tagRegex.test(node.textContent)) {
                matches.push(node);
            }
            tagRegex.lastIndex = 0;
        }

        matches.forEach(textNode => {
            const text = textNode.textContent;
            const re = /\[\[BALANCE(?::([^\]]*))?\]\]/g;
            let lastIndex = 0;
            let m;
            const fragment = document.createDocumentFragment();

            while ((m = re.exec(text)) !== null) {
                // Texte avant le tag
                if (m.index > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.slice(lastIndex, m.index)));
                }

                const eqString = (m[1] || '').trim();
                let params;
                let wasRandom = false;

                if (eqString) {
                    params = parseFullEquation(eqString);
                    if (!params) {
                        console.warn(`[EquationBalance] Équation invalide dans le tag : "${eqString}". Génération aléatoire utilisée à la place.`);
                        params = generateRandomEquation();
                        wasRandom = true;
                    }
                } else {
                    params = generateRandomEquation();
                    wasRandom = true;
                }
                params._wasRandom = wasRandom;
                params._eqString = eqString || null;

                const mountPoint = document.createElement('div');
                fragment.appendChild(mountPoint);

                _instanceCounter++;
                const instance = new EquationBalanceInstance(mountPoint, params, _instanceCounter);
                if (typeof onSolved === 'function') {
                    instance.onSolved = (solutionValue) => onSolved(solutionValue, eqString, mountPoint);
                }

                lastIndex = re.lastIndex;
            }

            if (lastIndex < text.length) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
            }

            textNode.parentNode.replaceChild(fragment, textNode);
        });
    }

    // Expose globalement (script classique, pas de module ES)
    window.initEquationBalances = initEquationBalances;
    window.EquationBalanceInstance = EquationBalanceInstance; // utile pour debug/tests
    window._eqbal_parseFullEquation = parseFullEquation; // exposé pour tests
    window._eqbal_generateRandomEquation = generateRandomEquation;

})();
