// ============================================================
// engine/quizPlacementEngine.js
// ------------------------------------------------------------
// Moteur de quiz "placement sur figure" : l'élève doit
//   - tracer un axe de symétrie (clic-glisser), ou
//   - placer un centre de symétrie (clic)
// directement sur une figure SVG, puis cliquer sur "Valider".
// Le placement n'a pas besoin d'être parfait : chaque question
// définit une tolérance (angle + décalage pour un axe, rayon
// pour un centre) qui compte la réponse comme juste tant que
// l'idée y est.
//
// Autonome : aucune dépendance externe, à inclure via une simple
// balise <script src="quizPlacementEngine.js"></script>.
//
// Usage dans le cours :
//   <div id="quiz-area-XXX"></div>
//   <script>
//       startPlacementQuiz('quiz-area-XXX', maListeDeQuestions);
//   </script>
//
// Format attendu pour chaque question (voir localQuestions_5eme_chapitre08.js
// pour des exemples complets) :
// {
//     type: 'axis' | 'center',
//     question: '<p>Énoncé (HTML autorisé, y compris $...$ pour LaTeX)</p>',
//     svg: '<svg viewBox="0 0 400 280" ...>...la figure à afficher...</svg>',
//     viewBox: { w: 400, h: 280 },           // doit correspondre au viewBox du svg ci-dessus
//     valid: [                                // AXE : un ou plusieurs axes acceptés
//         { x1: 200, y1: 60, x2: 200, y2: 220 }
//     ],
//     // OU pour un axe "n'importe quel angle" (ex: cercle) :
//     // valid: [ { anyAngle: true, cx: 200, cy: 140 } ],
//     // OU pour une figure SANS axe de symétrie : valid: [] (tableau vide)
//     // CENTRE : un point unique
//     // valid: { x: 200, y: 150 },
//     // OU pour une figure SANS centre de symétrie : valid: null
//     explanation: '<p>Texte affiché après validation (correction).</p>'
// }
// Dans tous les cas, un bouton "Cette figure n'a pas d'axe/de centre de
// symétrie" est proposé à l'élève à chaque question (qu'il y ait ou non
// une vraie réponse) : il permet de reconnaître l'ABSENCE de symétrie,
// une compétence à part entière (ex : triangle scalène, parallélogramme
// quelconque pour un axe ; triangle équilatéral, trapèze isocèle pour un
// centre).
// ============================================================

(function (global) {
    'use strict';

    const DEFAULTS = {
        axisAngleToleranceDeg: 7,
        axisOffsetTolerancePx: 12,
        centerRadiusTolerancePx: 14,
        minDragPx: 15
    };

    // ---------- petits utilitaires géométriques ----------

    function svgPoint(svg, clientX, clientY) {
        const pt = svg.createSVGPoint();
        pt.x = clientX;
        pt.y = clientY;
        const ctm = svg.getScreenCTM();
        if (!ctm) return { x: 0, y: 0 };
        const p = pt.matrixTransform(ctm.inverse());
        return { x: p.x, y: p.y };
    }

    function angleOfLine(x1, y1, x2, y2) {
        let a = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        a = ((a % 180) + 180) % 180;
        return a;
    }

    function angleDiff(a, b) {
        const d = Math.abs(a - b) % 180;
        return Math.min(d, 180 - d);
    }

    function pointToLineDistance(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        return Math.abs((px - x1) * dy - (py - y1) * dx) / len;
    }

    function dist(x1, y1, x2, y2) {
        return Math.hypot(x2 - x1, y2 - y1);
    }

    // ---------- rotation aléatoire des figures "classiques" ----------
    // Empêche l'axe vertical (ou horizontal) d'être "par hasard" une bonne
    // réponse systématique : on tourne la figure (et les coordonnées de
    // validation) d'un angle aléatoire à chaque affichage.

    function rotatePoint(x, y, cx, cy, angleDeg) {
        const rad = angleDeg * Math.PI / 180;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        const dx = x - cx, dy = y - cy;
        return { x: cx + dx * cos - dy * sin, y: cy + dx * sin + dy * cos };
    }

    // Choisit un angle aléatoire (0-359°) tel qu'AUCUN axe valide de la
    // figure ne tombe (à 12° près) sur une direction verticale ou
    // horizontale une fois tourné — sinon la bonne réponse resterait
    // devinable par réflexe. Un tableau valid vide (figure sans axe)
    // valide n'importe quel angle immédiatement.
    function pickSafeRotationDeg(valid) {
        for (let attempt = 0; attempt < 60; attempt++) {
            const R = Math.floor(Math.random() * 360);
            const ok = valid.every(function (v) {
                if (v.anyAngle) return true;
                const a0 = angleOfLine(v.x1, v.y1, v.x2, v.y2);
                const a = ((a0 + R) % 180 + 180) % 180;
                const distTo0 = Math.min(a, 180 - a);
                const distTo90 = Math.abs(a - 90);
                return distTo0 > 12 && distTo90 > 12;
            });
            if (ok) return R;
        }
        return 37; // repli très improbable
    }

    // Tourne un tableau "valid" (axes) autour de (cx,cy) — renvoie une
    // COPIE, ne modifie jamais les données d'origine (partagées entre
    // toutes les tentatives de tous les élèves tant que la page n'est
    // pas rechargée).
    function rotateValidAxes(valid, angleDeg, cx, cy) {
        if (!angleDeg) return valid;
        return valid.map(function (v) {
            if (v.anyAngle) {
                const c = rotatePoint(v.cx, v.cy, cx, cy, angleDeg);
                return { anyAngle: true, cx: c.x, cy: c.y };
            }
            const p1 = rotatePoint(v.x1, v.y1, cx, cy, angleDeg);
            const p2 = rotatePoint(v.x2, v.y2, cx, cy, angleDeg);
            return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
        });
    }

    // Enveloppe le contenu d'un <svg>...</svg> dans un <g transform="rotate(...)">
    // sans toucher au reste : fonctionne quel que soit le contenu (polygon,
    // rect, circle, path...), aucune donnée à restructurer.
    function applyRotationToSvg(svgString, angleDeg, cx, cy) {
        if (!angleDeg) return svgString;
        const openMatch = svgString.match(/^(<svg[^>]*>)/);
        const closeIdx = svgString.lastIndexOf('</svg>');
        if (!openMatch || closeIdx === -1) return svgString;
        const openTag = openMatch[1];
        const inner = svgString.slice(openTag.length, closeIdx);
        return openTag + '<g transform="rotate(' + angleDeg + ' ' + cx + ' ' + cy + ')">' + inner + '</g></svg>';
    }

    // Mélange de Fisher-Yates — renvoie un NOUVEAU tableau, ne modifie pas
    // l'original (important : le même tableau de questions, par ex.
    // placementQuestions_5eme_chapitre08_axiale, est une constante globale
    // partagée ; la muter changerait l'ordre pour tout le monde/toutes les
    // relances tant que la page n'est pas rechargée).
    function shuffle(array) {
        const copy = array.slice();
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = copy[i]; copy[i] = copy[j]; copy[j] = tmp;
        }
        return copy;
    }

    function createSvgEl(tag, attrs) {
        const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
        return el;
    }

    // ---------- vérification des réponses ----------

    function checkAxis(x1, y1, x2, y2, valids, tol) {
        for (const v of valids) {
            if (v.anyAngle) {
                const offset = pointToLineDistance(v.cx, v.cy, x1, y1, x2, y2);
                if (offset <= tol.axisOffsetTolerancePx) return true;
                continue;
            }
            const angleOk = angleDiff(angleOfLine(x1, y1, x2, y2), angleOfLine(v.x1, v.y1, v.x2, v.y2)) <= tol.axisAngleToleranceDeg;
            if (!angleOk) continue;
            const midX = (v.x1 + v.x2) / 2, midY = (v.y1 + v.y2) / 2;
            const offset = pointToLineDistance(midX, midY, x1, y1, x2, y2);
            if (offset <= tol.axisOffsetTolerancePx) return true;
        }
        return false;
    }

    function checkCenter(px, py, valid, tol) {
        if (!valid) return false; // pas de centre de symétrie pour cette figure
        return dist(px, py, valid.x, valid.y) <= tol.centerRadiusTolerancePx;
    }

    // Une figure a-t-elle réellement un axe/centre de symétrie, selon la question ?
    function hasRealAnswer(q) {
        if (q.type === 'axis') return Array.isArray(q.valid) && q.valid.length > 0;
        return !!q.valid;
    }

    // ---------- styles injectés une seule fois ----------

    function injectStylesOnce() {
        if (document.getElementById('pq-styles')) return;
        const style = document.createElement('style');
        style.id = 'pq-styles';
        style.textContent = `
.pq-wrapper{border:1px solid #d8dde3;border-radius:12px;padding:20px;max-width:560px;margin:20px auto;background:#fafbfc;}
.pq-header{display:flex;justify-content:space-between;font-size:0.9em;color:#555;margin-bottom:10px;font-weight:bold;}
.pq-question-text{font-size:1.05em;margin-bottom:12px;text-align:center;}
.pq-question-text svg{max-width:100%;}
.pq-figure-stage{position:relative;width:100%;margin:0 auto 14px auto;touch-action:none;}
.pq-figure-stage svg{width:100%;height:auto;display:block;}
.pq-figure-inner{width:100%;}
.pq-overlay{position:absolute;top:0;left:0;width:100%;height:100%;cursor:crosshair;}
.pq-hint{text-align:center;font-size:0.85em;color:#777;margin-bottom:12px;font-style:italic;}
.pq-controls{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:6px;}
.pq-btn{padding:9px 18px;border:none;border-radius:7px;cursor:pointer;font-size:0.95em;font-weight:bold;transition:opacity .15s;}
.pq-btn:hover{opacity:0.85;}
.pq-btn.pq-validate{background:#2E5C8A;color:#fff;}
.pq-btn.pq-reset{background:#e3e7eb;color:#333;}
.pq-btn.pq-none{background:#fff;color:#555;border:1.5px solid #c7ccd1;}
.pq-btn.pq-next{background:#2e8b57;color:#fff;}
.pq-btn:disabled{opacity:0.45;cursor:not-allowed;}
.pq-warning{text-align:center;color:#c0392b;font-size:0.85em;margin-top:4px;min-height:1.1em;}
.pq-feedback{padding:12px 16px;border-radius:9px;font-size:0.95em;margin-top:10px;}
.pq-feedback.correct{background:#e6f4ea;border:1px solid #2e8b57;color:#1e6b3e;}
.pq-feedback.incorrect{background:#fdecea;border:1px solid #c0392b;color:#9a2b1e;}
.pq-feedback .pq-explanation{margin-top:8px;color:#333;}
.pq-final{text-align:center;}
.pq-final .pq-score-big{font-size:1.8em;font-weight:bold;margin:14px 0;color:#2E5C8A;}
`;
        document.head.appendChild(style);
    }

    // ---------- moteur principal ----------

    function startPlacementQuiz(containerId, questions, options) {
        injectStylesOnce();
        const opts = Object.assign({}, DEFAULTS, options || {});
        const container = document.getElementById(containerId);
        if (!container) { console.error('startPlacementQuiz : conteneur introuvable ->', containerId); return; }

        // ── Harmonisation avec les QCM classiques ──────────────────────────
        // Même comportement que startQuizFromButton() / launchLocalQuiz()
        // (app.js) et closeInjectedQuiz() (quiz.js) : un seul quiz ouvert à
        // la fois sur la page (activeInjectedQuizId), bouton déclencheur qui
        // devient "Masquer le quizz" pendant que c'est ouvert, et qui bascule
        // (ferme) si on reclique dessus pendant que CE quiz est ouvert.
        // activeInjectedQuizId est une variable partagée entre scripts
        // classiques (déclarée dans app.js, lue/écrite aussi depuis quiz.js) :
        // on la lit/écrit pareil ici, avec un typeof de garde si jamais ce
        // moteur est utilisé seul, sans le reste du site.
        function findTriggerBtn(id) {
            return document.querySelector(`[data-quiz-target="${id}"]`)
                || document.querySelector(`[data_quiz_target="${id}"]`);
        }
        const hasLock = typeof activeInjectedQuizId !== 'undefined';

        if (hasLock && activeInjectedQuizId === containerId) {
            // Reclic sur le bouton pendant que CE quiz est déjà ouvert -> on le
            // referme (bascule), comme n'importe quel autre quiz du site.
            if (typeof global.closeInjectedQuiz === 'function') {
                global.closeInjectedQuiz(containerId);
            } else {
                container.innerHTML = '';
                activeInjectedQuizId = null;
            }
            return;
        }
        if (hasLock && activeInjectedQuizId && activeInjectedQuizId !== containerId) {
            // Un AUTRE quiz est ouvert ailleurs sur la page -> on le referme
            // d'abord (un seul quiz ouvert à la fois, comme launchLocalQuiz).
            const oldContainer = document.getElementById(activeInjectedQuizId);
            if (oldContainer) oldContainer.innerHTML = '';
            const oldBtn = findTriggerBtn(activeInjectedQuizId);
            if (oldBtn) oldBtn.innerText = 'Ai-je bien compris ?';
        }
        if (hasLock) activeInjectedQuizId = containerId;
        const triggerBtn = findTriggerBtn(containerId);
        if (triggerBtn) triggerBtn.innerText = 'Masquer le quizz';

        // ── Intégration au suivi Supabase (comme les QCM classiques) ──────
        // opts.quizKey / opts.chapterTitle / opts.levelName sont optionnels :
        // s'ils sont fournis et que tracker.js est chargé, le résultat final
        // est enregistré via trackerSaveResult() exactement comme un QCM
        // classique (record_quiz_result, XP, badges, streak...).
        const quizKey     = opts.quizKey || null;
        const chapterTitle = opts.chapterTitle || 'Inconnu';
        const levelName    = opts.levelName || 'Inconnu';

        function beginTracking() {
            if (quizKey && typeof global.trackerStartQuiz === 'function') {
                global.trackerStartQuiz(quizKey, chapterTitle, levelName);
            }
        }

        let index = 0;
        let score = 0;
        questions = shuffle(questions); // ordre aléatoire à chaque lancement

        beginTracking();
        render();

        function render() {
            if (index >= questions.length) { renderFinal(); return; }
            const q = questions[index];
            const vb = q.viewBox || { w: 400, h: 280 };

            // Rotation (aléatoire ou fixe) de la figure "classique" — voir
            // q.rotation ('random' | nombre de degrés | absent) et
            // q.rotationCenter ({x,y}, le pivot). N'affecte que l'affichage
            // et les coordonnées de validation ; les données d'origine ne
            // sont jamais modifiées (un même tableau de questions est
            // réutilisé à chaque tentative, par tous les élèves).
            const rotCenter = q.rotationCenter || { x: vb.w / 2, y: vb.h / 2 };
            const rotAngle = q.rotation === 'random' ? pickSafeRotationDeg(q.valid || [])
                : (typeof q.rotation === 'number' ? q.rotation : 0);
            const displaySvg = rotAngle ? applyRotationToSvg(q.svg, rotAngle, rotCenter.x, rotCenter.y) : q.svg;
            const activeValid = (rotAngle && q.type === 'axis') ? rotateValidAxes(q.valid, rotAngle, rotCenter.x, rotCenter.y) : q.valid;

            container.innerHTML =
                '<div class="pq-wrapper">' +
                    '<div class="pq-header">' +
                        '<span>Question ' + (index + 1) + '/' + questions.length + '</span>' +
                        '<span>Score : ' + score + '/' + questions.length + '</span>' +
                    '</div>' +
                    '<div class="pq-question-text">' + q.question + '</div>' +
                    '<div class="pq-figure-stage" style="max-width:' + vb.w + 'px;">' +
                        '<div class="pq-figure-inner">' + displaySvg + '</div>' +
                        '<svg class="pq-overlay" viewBox="0 0 ' + vb.w + ' ' + vb.h + '"></svg>' +
                    '</div>' +
                    '<div class="pq-hint">' + (q.type === 'axis'
                        ? '✏️ Clique, glisse puis relâche pour tracer l\'axe de symétrie, ou indique si cette figure n\'en a pas.'
                        : '✏️ Clique sur la figure pour placer le centre de symétrie, ou indique si cette figure n\'en a pas.') +
                    '</div>' +
                    '<div class="pq-controls">' +
                        '<button type="button" class="pq-btn pq-reset">Effacer</button>' +
                        '<button type="button" class="pq-btn pq-validate">Valider</button>' +
                    '</div>' +
                    '<div class="pq-controls">' +
                        '<button type="button" class="pq-btn pq-none">' + (q.type === 'axis'
                            ? "Cette figure n'a pas d'axe de symétrie"
                            : "Cette figure n'a pas de centre de symétrie") + '</button>' +
                    '</div>' +
                    '<div class="pq-warning"></div>' +
                    '<div class="pq-feedback-zone"></div>' +
                '</div>';

            const overlay = container.querySelector('.pq-overlay');
            const resetBtn = container.querySelector('.pq-reset');
            const validateBtn = container.querySelector('.pq-validate');
            const noneBtn = container.querySelector('.pq-none');
            const warningEl = container.querySelector('.pq-warning');
            const feedbackZone = container.querySelector('.pq-feedback-zone');

            let lineEl = null, handleStart = null, handleEnd = null, pointEl = null;
            let dragging = null; // 'new' | 'start' | 'end' | 'point'
            let startCoord = null;
            let hasLine = false, hasPoint = false;
            let answered = false;

            function clearDrawing() {
                if (lineEl) { lineEl.remove(); lineEl = null; }
                if (handleStart) { handleStart.remove(); handleStart = null; }
                if (handleEnd) { handleEnd.remove(); handleEnd = null; }
                if (pointEl) { pointEl.remove(); pointEl = null; }
                hasLine = false; hasPoint = false;
                warningEl.textContent = '';
            }

            function ensureLine(x1, y1, x2, y2) {
                if (!lineEl) {
                    lineEl = createSvgEl('line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: '#B5651D', 'stroke-width': 3, 'stroke-linecap': 'round' });
                    overlay.appendChild(lineEl);
                } else {
                    lineEl.setAttribute('x1', x1); lineEl.setAttribute('y1', y1);
                    lineEl.setAttribute('x2', x2); lineEl.setAttribute('y2', y2);
                }
            }

            function ensureHandles(x1, y1, x2, y2) {
                if (!handleStart) {
                    handleStart = createSvgEl('circle', { cx: x1, cy: y1, r: 8, fill: '#B5651D', stroke: '#fff', 'stroke-width': 2 });
                    overlay.appendChild(handleStart);
                } else { handleStart.setAttribute('cx', x1); handleStart.setAttribute('cy', y1); }
                if (!handleEnd) {
                    handleEnd = createSvgEl('circle', { cx: x2, cy: y2, r: 8, fill: '#B5651D', stroke: '#fff', 'stroke-width': 2 });
                    overlay.appendChild(handleEnd);
                } else { handleEnd.setAttribute('cx', x2); handleEnd.setAttribute('cy', y2); }
            }

            function ensurePoint(x, y) {
                if (!pointEl) {
                    pointEl = createSvgEl('circle', { cx: x, cy: y, r: 10, fill: '#B5651D', stroke: '#fff', 'stroke-width': 2.5 });
                    overlay.appendChild(pointEl);
                } else { pointEl.setAttribute('cx', x); pointEl.setAttribute('cy', y); }
            }

            overlay.addEventListener('pointerdown', function (e) {
                if (answered) return;
                warningEl.textContent = '';
                const p = svgPoint(overlay, e.clientX, e.clientY);

                if (q.type === 'center') {
                    dragging = 'point';
                    ensurePoint(p.x, p.y);
                    hasPoint = true;
                    overlay.setPointerCapture(e.pointerId);
                    return;
                }

                if (e.target === handleStart) { dragging = 'start'; overlay.setPointerCapture(e.pointerId); return; }
                if (e.target === handleEnd) { dragging = 'end'; overlay.setPointerCapture(e.pointerId); return; }

                dragging = 'new';
                startCoord = p;
                ensureLine(p.x, p.y, p.x, p.y);
                overlay.setPointerCapture(e.pointerId);
            });

            overlay.addEventListener('pointermove', function (e) {
                if (!dragging || answered) return;
                const p = svgPoint(overlay, e.clientX, e.clientY);
                if (dragging === 'point') { ensurePoint(p.x, p.y); return; }
                if (dragging === 'new') { ensureLine(startCoord.x, startCoord.y, p.x, p.y); return; }
                if (dragging === 'start') {
                    const x2 = parseFloat(lineEl.getAttribute('x2')), y2 = parseFloat(lineEl.getAttribute('y2'));
                    ensureLine(p.x, p.y, x2, y2); ensureHandles(p.x, p.y, x2, y2); return;
                }
                if (dragging === 'end') {
                    const x1 = parseFloat(lineEl.getAttribute('x1')), y1 = parseFloat(lineEl.getAttribute('y1'));
                    ensureLine(x1, y1, p.x, p.y); ensureHandles(x1, y1, p.x, p.y); return;
                }
            });

            overlay.addEventListener('pointerup', function () {
                if (!dragging || answered) return;
                if (dragging === 'new') {
                    const x1 = parseFloat(lineEl.getAttribute('x1')), y1 = parseFloat(lineEl.getAttribute('y1'));
                    const x2 = parseFloat(lineEl.getAttribute('x2')), y2 = parseFloat(lineEl.getAttribute('y2'));
                    if (dist(x1, y1, x2, y2) < opts.minDragPx) {
                        lineEl.remove(); lineEl = null;
                    } else {
                        hasLine = true;
                        ensureHandles(x1, y1, x2, y2);
                    }
                }
                if (dragging === 'point') hasPoint = true;
                dragging = null;
            });

            resetBtn.addEventListener('click', function () {
                if (!answered) clearDrawing();
            });

            function submitAnswer(userSaysNone) {
                if (!userSaysNone) {
                    if (q.type === 'axis' && !hasLine) { warningEl.textContent = "Trace d'abord un axe, ou indique que cette figure n'en a pas."; return; }
                    if (q.type === 'center' && !hasPoint) { warningEl.textContent = "Place d'abord un point, ou indique que cette figure n'en a pas."; return; }
                }

                answered = true;
                warningEl.textContent = '';
                const realAnswerExists = hasRealAnswer(q);
                let correct;
                let x1, y1, x2, y2, px, py;

                if (userSaysNone) {
                    correct = !realAnswerExists;
                } else if (q.type === 'axis') {
                    x1 = parseFloat(lineEl.getAttribute('x1')); y1 = parseFloat(lineEl.getAttribute('y1'));
                    x2 = parseFloat(lineEl.getAttribute('x2')); y2 = parseFloat(lineEl.getAttribute('y2'));
                    correct = realAnswerExists && checkAxis(x1, y1, x2, y2, activeValid, opts);
                } else {
                    px = parseFloat(pointEl.getAttribute('cx')); py = parseFloat(pointEl.getAttribute('cy'));
                    correct = realAnswerExists && checkCenter(px, py, q.valid, opts);
                }

                if (correct) score++;
                overlay.style.pointerEvents = 'none';
                validateBtn.disabled = true;
                resetBtn.disabled = true;
                noneBtn.disabled = true;

                const isLast = index === questions.length - 1;

                if (correct) {
                    // Réponse juste : pas de correction affichée, on enchaîne directement
                    // (juste un flash vert sur le tracé de l'élève pour confirmer), pour rester fluide.
                    if (!userSaysNone) {
                        if (q.type === 'axis') {
                            lineEl.setAttribute('stroke', '#2e8b57');
                            if (handleStart) handleStart.setAttribute('fill', '#2e8b57');
                            if (handleEnd) handleEnd.setAttribute('fill', '#2e8b57');
                        } else {
                            pointEl.setAttribute('fill', '#2e8b57');
                        }
                    }
                    feedbackZone.innerHTML =
                        '<div class="pq-feedback correct"><strong>✔ Bien vu, c\'est correct !</strong></div>';

                    setTimeout(function () {
                        index++;
                        render();
                    }, 700);
                } else {
                    // Réponse fausse : on affiche la solution (en vert) si elle existe,
                    // ou on précise qu'il n'y en a en réalité aucune. L'élève passe à la
                    // suite quand il est prêt.
                    if (realAnswerExists) {
                        if (q.type === 'axis') {
                            activeValid.forEach(function (v) {
                                if (v.anyAngle) {
                                    const ang = (userSaysNone ? 0 : angleOfLine(x1, y1, x2, y2)) * Math.PI / 180;
                                    const len = Math.max(vb.w, vb.h) * 0.4;
                                    const sx = v.cx - Math.cos(ang) * len, sy = v.cy - Math.sin(ang) * len;
                                    const ex = v.cx + Math.cos(ang) * len, ey = v.cy + Math.sin(ang) * len;
                                    overlay.appendChild(createSvgEl('line', { x1: sx, y1: sy, x2: ex, y2: ey, stroke: '#2e8b57', 'stroke-width': 3, 'stroke-dasharray': '9 6' }));
                                    overlay.appendChild(createSvgEl('circle', { cx: v.cx, cy: v.cy, r: 4, fill: '#2e8b57' }));
                                } else {
                                    overlay.appendChild(createSvgEl('line', { x1: v.x1, y1: v.y1, x2: v.x2, y2: v.y2, stroke: '#2e8b57', 'stroke-width': 3, 'stroke-dasharray': '9 6' }));
                                }
                            });
                        } else {
                            overlay.appendChild(createSvgEl('circle', { cx: q.valid.x, cy: q.valid.y, r: 11, fill: 'none', stroke: '#2e8b57', 'stroke-width': 3 }));
                            overlay.appendChild(createSvgEl('circle', { cx: q.valid.x, cy: q.valid.y, r: 3.5, fill: '#2e8b57' }));
                        }
                    }

                    const wrongMsg = realAnswerExists
                        ? '✘ Pas tout à fait : la solution est tracée en vert.'
                        : (q.type === 'axis'
                            ? "✘ En réalité, cette figure n'a aucun axe de symétrie."
                            : "✘ En réalité, cette figure n'a aucun centre de symétrie.");

                    feedbackZone.innerHTML =
                        '<div class="pq-feedback incorrect">' +
                            '<strong>' + wrongMsg + '</strong>' +
                            (q.explanation ? '<div class="pq-explanation">' + q.explanation + '</div>' : '') +
                            '<div style="text-align:center;margin-top:12px;">' +
                                '<button type="button" class="pq-btn pq-next">' + (isLast ? 'Voir mon score final' : 'Question suivante') + '</button>' +
                            '</div>' +
                        '</div>';

                    feedbackZone.querySelector('.pq-next').addEventListener('click', function () {
                        index++;
                        render();
                    });

                    if (global.MathJax && global.MathJax.typesetPromise) {
                        global.MathJax.typesetPromise([feedbackZone]).catch(function () {});
                    }
                }
            }

            validateBtn.addEventListener('click', function () { submitAnswer(false); });
            noneBtn.addEventListener('click', function () { submitAnswer(true); });

            if (global.MathJax && global.MathJax.typesetPromise) {
                global.MathJax.typesetPromise([container]).catch(function () {});
            }
        }

        function renderFinal() {
            container.innerHTML =
                '<div class="pq-wrapper pq-final">' +
                    '<h3>Quiz terminé !</h3>' +
                    '<div class="pq-score-big">' + score + ' / ' + questions.length + '</div>' +
                    '<p>' + (score === questions.length
                        ? "Score parfait, bravo ! 🎉"
                        : (score >= questions.length * 0.7
                            ? "Bon travail, continue comme ça !"
                            : "N'hésite pas à relire le cours puis à recommencer.")) + '</p>' +
                    '<button type="button" class="pq-btn pq-validate pq-close">Fermer le quiz</button>' +
                '</div>';

            // Enregistrement Supabase (identique aux QCM classiques) : silencieux
            // si aucune quizKey n'a été fournie ou si tracker.js n'est pas chargé.
            if (quizKey && typeof global.trackerSaveResult === 'function') {
                global.trackerSaveResult(score, questions.length);
            }

            // "Fermer le quiz" — identique aux QCM classiques (voir quiz.js :
            // closeInjectedQuiz), pour libérer le verrou activeInjectedQuizId
            // et remettre le bouton "Ai-je bien compris ?" sur son état
            // initial. On réutilise la fonction existante du site plutôt que
            // d'en dupliquer la logique.
            container.querySelector('.pq-close').addEventListener('click', function () {
                if (typeof global.closeInjectedQuiz === 'function') {
                    global.closeInjectedQuiz(containerId);
                } else {
                    container.innerHTML = '';
                    if (typeof activeInjectedQuizId !== 'undefined') activeInjectedQuizId = null;
                }
            });
        }
    }

    global.startPlacementQuiz = startPlacementQuiz;

})(typeof window !== 'undefined' ? window : this);
