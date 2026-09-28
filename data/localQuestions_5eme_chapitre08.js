// ============================================================
// data/localQuestions_5eme_chapitre08.js — 5ème, chapitre 8 : Transformations
// ============================================================
// Généré à partir de l'ancien data/localQuestions5eme.js.
// Clés renumérotées au format 6 chiffres : [niveau][chapitre 2 chiffres]
// [n° partie H2][n° sous-partie H3][n° questionnaire dans la sous-partie].
// Contenu des questions strictement inchangé, seule la clé a changé —
// voir le rapport de correspondance mapping_5eme.csv pour
// retrouver l'ancienne clé de chaque questionnaire.
// ============================================================

const localQuestions_5eme_chapitre08 = {
    "508111": [
            {
                quiz: { q: 'Deux points $M$ et $M\'$ sont symétriques par rapport à une droite $(d)$ lorsque...', a: '(d) est la médiatrice du segment [MM\']' },
                options: '(d) est la médiatrice du segment [MM\'] ¤ (d) passe par le milieu de [MM\'] sans forcément lui être perpendiculaire ¤ (d) est parallèle à la droite (MM\') ¤ M et M\' sont à la même distance d\'un point de (d), sans autre condition',
                explanation: 'Être symétriques par rapport à (d) signifie que (d) passe par le milieu de [MM\'] ET qu\'elle lui est perpendiculaire : c\'est exactement la définition de la <strong>médiatrice</strong> de [MM\'].'
            },
            {
                quiz: { q: 'Si $M$ et $M\'$ sont symétriques par rapport à une droite $(d)$, alors la droite $(MM\')$ est...', a: 'perpendiculaire à (d)' },
                options: 'perpendiculaire à (d) ¤ parallèle à (d) ¤ confondue avec (d) ¤ sécante à (d) sans angle particulier',
                explanation: 'Par définition de la symétrie axiale, le segment qui relie un point à son image est toujours <strong>perpendiculaire</strong> à l\'axe.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:180px; display:block; margin:8px auto; font-family:sans-serif;"> <polygon points="70,25 130,25 165,105 35,105" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/> </svg><p style="margin-top:8px;">Combien d\'axes de symétrie possède ce trapèze isocèle ?</p>', a: '1' },
                options: '0 ¤ 1 ¤ 2 ¤ 4',
                explanation: 'Un trapèze isocèle (non rectangle) possède un unique axe de symétrie : la droite qui passe par les milieux de ses deux bases.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><polygon points="70,25 130,25 165,105 35,105" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/><line x1="100" y1="12" x2="100" y2="118" stroke="#2e8b57" stroke-width="2" stroke-dasharray="5 4"/><text x="104" y="22" font-size="12" font-family="sans-serif" fill="#2e8b57">(d)</text></svg><span style="color:#2e8b57; font-size:0.9em;">✔ axe vertical passant par les milieux des deux bases</span></div><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><line x1="15" y1="65" x2="185" y2="65" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><polygon points="70,25 130,25 165,105 35,105" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/><polygon points="70,105 130,105 165,25 35,25" fill="#c0392b" fill-opacity="0.15" stroke="#c0392b" stroke-width="2" stroke-dasharray="4 4"/></svg><span style="color:#c0392b; font-size:0.9em;">✘ un axe horizontal ne fonctionne pas : le symétrique (en rouge) ne coïncide pas avec le trapèze</span></div></div>'
            },
            {
                quiz: { q: 'Un cercle possède...', a: 'une infinité d\'axes de symétrie' },
                options: 'une infinité d\'axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie ¤ exactement quatre axes de symétrie',
                explanation: 'Toute droite passant par le centre d\'un cercle est un axe de symétrie : un cercle possède donc une <strong>infinité</strong> d\'axes de symétrie.'
            },
            {
                quiz: { q: 'La symétrie axiale conserve toujours...', a: 'les longueurs, les angles et les aires' },
                options: 'les longueurs, les angles et les aires ¤ les longueurs mais jamais les angles ¤ les angles mais jamais les longueurs ¤ aucune de ces grandeurs',
                explanation: 'La symétrie axiale est une <strong>isométrie</strong> : elle conserve les longueurs, les angles et donc les aires des figures.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"> <line x1="0" y1="0" x2="0" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="20" y1="0" x2="20" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="40" y1="0" x2="40" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="60" y1="0" x2="60" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="80" y1="0" x2="80" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="100" y1="0" x2="100" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="120" y1="0" x2="120" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="140" y1="0" x2="140" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="160" y1="0" x2="160" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="180" y1="0" x2="180" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="200" y1="0" x2="200" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="220" y1="0" x2="220" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="240" y1="0" x2="240" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="260" y1="0" x2="260" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="0" x2="260" y2="0" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="20" x2="260" y2="20" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="40" x2="260" y2="40" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="60" x2="260" y2="60" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="80" x2="260" y2="80" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="100" x2="260" y2="100" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="120" x2="260" y2="120" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="140" x2="260" y2="140" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="160" x2="260" y2="160" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="180" x2="260" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="140" y1="8" x2="140" y2="172" stroke="#C0392B" stroke-width="2.5"/> <text x="146" y="20" font-size="13" fill="#C0392B" font-weight="bold">(d)</text> <circle cx="60" cy="90" r="4" fill="#2E5C8A"/> <text x="44" y="84" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <circle cx="220" cy="90" r="4" fill="#333"/> <text x="228" y="84" font-size="14" fill="#333" font-weight="bold">a</text> <circle cx="220" cy="50" r="4" fill="#333"/> <text x="228" y="44" font-size="14" fill="#333" font-weight="bold">b</text> <circle cx="180" cy="90" r="4" fill="#333"/> <text x="188" y="104" font-size="14" fill="#333" font-weight="bold">c</text> </svg><p style="margin-top:8px;">Sur la figure, quel point est l\'image du point $A$ par la symétrie d\'axe $(d)$ ?</p>', a: 'Le point a' },
                options: 'Le point a ¤ Le point b ¤ Le point c',
                explanation: 'L\'image de A doit se trouver sur la perpendiculaire à (d) passant par A, à la même distance de (d) que A, mais de l\'autre côté : c\'est le <strong>point a</strong>.'
            },
            {
                quiz: { q: 'Pour construire le symétrique d\'un point à l\'équerre, on trace d\'abord...', a: 'la perpendiculaire à (d) passant par ce point' },
                options: 'la perpendiculaire à (d) passant par ce point ¤ une droite parallèle à (d) ¤ un cercle centré sur (d) ¤ la médiatrice d\'un segment quelconque',
                explanation: 'La méthode à l\'équerre commence toujours par tracer la <strong>perpendiculaire</strong> à l\'axe passant par le point, avant de reporter la longueur de l\'autre côté.'
            },
            {
                quiz: { q: 'Pour construire au compas le symétrique d\'un point $A$ par rapport à $(d)$, on trace...', a: 'deux arcs de cercle centrés sur deux points de (d), passant par A' },
                options: 'deux arcs de cercle centrés sur deux points de (d), passant par A ¤ un seul arc de cercle centré en A ¤ une droite parallèle à (d) passant par A ¤ un arc de cercle centré au milieu de (d)',
                explanation: 'On place deux points sur (d), on trace un arc de cercle passant par A depuis chacun d\'eux : leur seconde intersection donne le <strong>symétrique</strong> de A.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:8px auto; font-family:sans-serif;"> <rect x="40" y="20" width="120" height="20" fill="#2E5C8A"/> <rect x="90" y="20" width="20" height="100" fill="#2E5C8A"/> </svg><p style="margin-top:8px;">Quel est l\'axe de symétrie de cette lettre $T$ majuscule ?</p>', a: 'Un axe vertical' },
                options: 'Un axe vertical ¤ Un axe horizontal ¤ Deux axes (vertical et horizontal) ¤ Cette lettre n\'a aucun axe de symétrie',
                explanation: 'La lettre T (dans une police simple) se replie parfaitement sur elle-même le long d\'un <strong>axe vertical</strong>, mais pas le long d\'un axe horizontal.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><rect x="40" y="20" width="120" height="20" fill="#2E5C8A"/><rect x="90" y="20" width="20" height="100" fill="#2E5C8A"/><line x1="100" y1="8" x2="100" y2="130" stroke="#2e8b57" stroke-width="2" stroke-dasharray="5 4"/><text x="104" y="20" font-size="12" font-family="sans-serif" fill="#2e8b57">(d)</text></svg><span style="color:#2e8b57; font-size:0.9em;">✔ axe vertical : les deux moitiés se superposent</span></div><div style="text-align:center;"><svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" style="max-width:150px; display:block; margin:auto;"><rect x="40" y="20" width="120" height="20" fill="#2E5C8A"/><rect x="90" y="20" width="20" height="100" fill="#2E5C8A"/><rect x="40" y="100" width="120" height="20" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="4 3"/><line x1="15" y1="70" x2="185" y2="70" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/></svg><span style="color:#c0392b; font-size:0.9em;">✘ axe horizontal : la barre se retrouverait en bas (pointillés rouges), ce qui ne correspond pas au T</span></div></div>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><polygon points="110,260 200,40 290,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><circle cx="110" cy="260" r="4" fill="#3333ff"/><circle cx="200" cy="40" r="4" fill="#3333ff"/><circle cx="290" cy="260" r="4" fill="#3333ff"/><text x="90" y="282" font-size="20" font-family="sans-serif" fill="#222">A</text><text x="192" y="28" font-size="20" font-family="sans-serif" fill="#222">B</text><text x="298" y="282" font-size="20" font-family="sans-serif" fill="#222">C</text></svg><p style="margin-top:8px;">Un triangle isocèle non équilatéral possède...</p>', a: 'exactement un axe de symétrie' },
                options: 'exactement un axe de symétrie ¤ aucun axe de symétrie ¤ exactement deux axes de symétrie ¤ exactement trois axes de symétrie',
                explanation: 'L\'axe de symétrie d\'un triangle isocèle est la <strong>médiatrice de sa base</strong>, qui passe aussi par le sommet principal.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="200" y1="15" x2="200" y2="300" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><polygon points="110,260 200,40 290,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><circle cx="110" cy="260" r="4" fill="#3333ff"/><circle cx="200" cy="40" r="4" fill="#3333ff"/><circle cx="290" cy="260" r="4" fill="#3333ff"/><text x="90" y="282" font-size="20" font-family="sans-serif" fill="#222">A</text><text x="192" y="28" font-size="20" font-family="sans-serif" fill="#222">B</text><text x="298" y="282" font-size="20" font-family="sans-serif" fill="#222">C</text><text x="206" y="13" font-size="15" font-family="sans-serif" fill="#2e8b57">(d)</text></svg><span style="color:#2e8b57; font-size:0.9em;">✔ axe passant par le sommet et le milieu de la base : le triangle se superpose parfaitement</span></div><div style="text-align:center;"><svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="0" y1="86.6" x2="400" y2="250.2" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="8 6"/><polygon points="110,260 200,40 290,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><polygon points="200,40 110,260 328.4,166.2" fill="#c0392b" fill-opacity="0.12" stroke="#c0392b" stroke-width="2.5" stroke-linejoin="round" stroke-dasharray="4 4"/><circle cx="110" cy="260" r="4" fill="#3333ff"/><circle cx="200" cy="40" r="4" fill="#3333ff"/><circle cx="290" cy="260" r="4" fill="#3333ff"/><text x="90" y="282" font-size="20" font-family="sans-serif" fill="#222">A</text><text x="192" y="28" font-size="20" font-family="sans-serif" fill="#222">B</text><text x="298" y="282" font-size="20" font-family="sans-serif" fill="#222">C</text><text x="332" y="170" font-size="14" font-family="sans-serif" fill="#c0392b">C\'</text></svg><span style="color:#c0392b; font-size:0.9em;">✘ axe perpendiculaire à un autre côté : le symétrique (en rouge) ne coïncide pas avec le triangle initial</span></div></div>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><polygon points="100,260 200,86.8 300,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/></svg><p style="margin-top:8px;">Un triangle équilatéral possède...</p>', a: 'trois axes de symétrie' },
                options: 'trois axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie ¤ une infinité d\'axes de symétrie',
                explanation: 'Chaque médiatrice d\'un côté d\'un triangle équilatéral est un axe de symétrie : il y en a donc <strong>trois</strong>, et elles se coupent toutes au même point (le centre du triangle).<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:10px auto;"><polygon points="100,260 200,86.8 300,260" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3" stroke-linejoin="round"/><line x1="200" y1="70" x2="200" y2="280" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="82.68" y1="270" x2="267.32" y2="163.4" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="317.32" y1="270" x2="132.68" y2="163.4" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="100" y="40" width="200" height="200" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/></svg><p style="margin-top:8px;">Un carré possède...</p>', a: 'quatre axes de symétrie' },
                options: 'quatre axes de symétrie ¤ deux axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie',
                explanation: 'Un carré possède <strong>quatre</strong> axes de symétrie : ses deux diagonales et les deux droites qui passent par les milieux de ses côtés opposés.<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:10px auto;"><rect x="100" y="40" width="200" height="200" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/><line x1="200" y1="20" x2="200" y2="260" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="80" y1="140" x2="320" y2="140" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="100" y1="40" x2="300" y2="240" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="300" y1="40" x2="100" y2="240" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/></svg>'
            },
            {
                quiz: { q: 'Si deux segments sont symétriques par rapport à un axe, alors...', a: 'ils ont la même longueur' },
                options: 'ils ont la même longueur ¤ ils sont nécessairement perpendiculaires entre eux ¤ ils sont nécessairement parallèles entre eux ¤ ils se coupent toujours sur l\'axe',
                explanation: 'La symétrie axiale conserve les longueurs : deux segments symétriques ont toujours la <strong>même longueur</strong>, mais ils ne sont pas forcément parallèles ni perpendiculaires entre eux.<div style="display:flex; flex-wrap:wrap; gap:16px; justify-content:center; margin-top:10px;"><div style="text-align:center;"><svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="200" y1="20" x2="200" y2="280" stroke="#888" stroke-width="2" stroke-dasharray="6 5"/><line x1="80" y1="80" x2="150" y2="220" stroke="#3333ff" stroke-width="3"/><line x1="320" y1="80" x2="250" y2="220" stroke="#c0392b" stroke-width="3"/><text x="205" y="18" font-size="13" font-family="sans-serif" fill="#555">(d)</text></svg><span style="font-size:0.9em;">Ici, les deux segments symétriques ne sont <strong>pas parallèles</strong>.</span></div><div style="text-align:center;"><svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:auto;"><line x1="200" y1="20" x2="200" y2="280" stroke="#888" stroke-width="2" stroke-dasharray="6 5"/><line x1="100" y1="100" x2="100" y2="180" stroke="#3333ff" stroke-width="3"/><line x1="300" y1="100" x2="300" y2="180" stroke="#c0392b" stroke-width="3"/><text x="205" y="18" font-size="13" font-family="sans-serif" fill="#555">(d)</text></svg><span style="font-size:0.9em;">Ici, ni le segment ni son symétrique ne <strong>touchent l\'axe</strong>.</span></div></div>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><line x1="200" y1="20" x2="200" y2="180" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><text x="206" y="18" font-size="14" font-family="sans-serif" fill="#c0392b">(d)</text><circle cx="200" cy="100" r="5" fill="#3333ff"/><text x="212" y="95" font-size="18" font-family="sans-serif" fill="#222">M</text></svg><p style="margin-top:8px;">Le symétrique d\'un point situé exactement sur l\'axe $(d)$ est...</p>', a: 'ce point lui-même' },
                options: 'ce point lui-même ¤ un point différent, situé de l\'autre côté de (d) ¤ impossible à déterminer ¤ toujours le milieu de (d)',
                explanation: 'Un point de l\'axe est à distance nulle de (d) : son symétrique est donc aussi à une distance nulle de l\'axe : <strong>lui-même</strong>. (Si on plie la feuille le long de l\'axe il ne bougera pas.) <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:10px auto;"><line x1="200" y1="20" x2="200" y2="180" stroke="#c0392b" stroke-width="2" stroke-dasharray="6 5"/><text x="206" y="18" font-size="14" font-family="sans-serif" fill="#c0392b">(d)</text><circle cx="200" cy="100" r="10" fill="none" stroke="#2e8b57" stroke-width="2" stroke-dasharray="3 3"/><circle cx="200" cy="100" r="5" fill="#3333ff"/><text x="212" y="95" font-size="18" font-family="sans-serif" fill="#222">M = M\'</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 500 195" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; width:480px; display:block; margin:8px auto; font-family:sans-serif;"> <rect x="0" y="0" width="160" height="195" fill="none" stroke="#333" stroke-width="1.5"/> <rect x="0" y="0" width="160" height="25" fill="#E08E2B"/> <text x="75" y="18" font-size="15" fill="#fff" font-weight="bold">a</text> <line x1="80" y1="30" x2="80" y2="185" stroke="#C0392B" stroke-width="2"/> <polygon points="20,150 50,150 20,110" fill="none" stroke="#2E5C8A" stroke-width="2"/> <polygon points="140,150 110,150 140,110" fill="none" stroke="#333" stroke-width="2"/> <rect x="170" y="0" width="160" height="195" fill="none" stroke="#333" stroke-width="1.5"/> <rect x="170" y="0" width="160" height="25" fill="#2E9BD6"/> <text x="245" y="18" font-size="15" fill="#fff" font-weight="bold">b</text> <line x1="250" y1="30" x2="250" y2="185" stroke="#C0392B" stroke-width="2"/> <polygon points="190,150 220,150 190,110" fill="none" stroke="#2E5C8A" stroke-width="2"/> <polygon points="310,175 280,175 310,135" fill="none" stroke="#333" stroke-width="2"/> <rect x="340" y="0" width="160" height="195" fill="none" stroke="#333" stroke-width="1.5"/> <rect x="340" y="0" width="160" height="25" fill="#9B59B6"/> <text x="415" y="18" font-size="15" fill="#fff" font-weight="bold">c</text> <line x1="420" y1="30" x2="420" y2="185" stroke="#C0392B" stroke-width="2"/> <polygon points="360,150 390,150 360,110" fill="none" stroke="#2E5C8A" stroke-width="2"/> <polygon points="460,150 490,150 460,110" fill="none" stroke="#333" stroke-width="2"/> </svg><p style="margin-top:8px;">Dans quel cas le triangle noir est-il bien l\'image du triangle bleu par la symétrie d\'axe rouge ?</p>', a: 'Cas a' },
                options: 'Cas a ¤ Cas b ¤ Cas c',
                explanation: 'Dans le cas a, chaque sommet et son image sont à la même distance de l\'axe, sur une perpendiculaire à celui-ci : la figure est correctement symétrisée. Dans le cas b, l\'image est décalée par rapport à la bonne perpendiculaire. Dans le cas c, la figure a simplement été <strong>translatée</strong> (elle n\'a pas été retournée).'
            },
            {
                quiz: { q: 'Deux figures symétriques par rapport à une droite sont...', a: 'superposables : elles ont la même forme et les mêmes dimensions' },
                options: 'superposables : elles ont la même forme et les mêmes dimensions ¤ parfaitement identiques ¤ de la même forme mais de tailles différentes ¤ perpendiculaires',
                explanation: 'Comme la symétrie axiale conserve les longueurs et les angles, les deux figures obtenues sont <strong>superposables</strong> (on dit aussi qu\'elles sont isométriques). Mais elles ne sont pas parfaitement identiques à cause de l\'effet miroir ! De plus ont dit que deux droites dont perpendiculaires mais jamais des figures entières.'
            },
            {
                quiz: { q: 'Dans une frise, un motif présente une symétrie axiale lorsqu\'il...', a: 'se replie parfaitement sur lui-même le long d\'une droite' },
                options: 'se replie parfaitement sur lui-même le long d\'une droite ¤ tourne d\'un demi-tour autour d\'un point sans changer d\'aspect ¤ se répète en glissant vers la droite ou la gauche ¤ change de couleur à chaque répétition',
                explanation: 'Une symétrie axiale correspond à un « effet miroir » : le motif se superpose à lui-même lorsqu\'on le <strong>replie</strong> le long d\'une droite.'
            },
            {
                quiz: { q: 'Pour vérifier qu\'une droite $(d)$ est bien un axe de symétrie d\'une figure, on peut...', a: 'plier la figure le long de (d) et vérifier qu\'elle se superpose parfaitement' },
                options: 'plier la figure le long de (d) et vérifier qu\'elle se superpose parfaitement ¤ faire tourner la figure d\'un demi-tour autour d\'un point de (d) ¤ mesurer uniquement la longueur des côtés de la figure ¤ vérifier que (d) passe par le centre de gravité de la figure',
                explanation: 'C\'est la définition même d\'un axe de symétrie : <strong>replier</strong> la figure le long de cette droite doit faire coïncider les deux moitiés.'
            },
            {
                quiz: { q: 'Sur un quadrillage, pour construire le symétrique d\'un point par rapport à un axe, on...', a: 'compte le nombre de carreaux jusqu\'à l\'axe, puis on reporte le même nombre de l\'autre côté sur la même ligne perpendiculaire' },
                options: 'compte le nombre de carreaux jusqu\'à l\'axe, puis on reporte le même nombre de l\'autre côté sur la même ligne perpendiculaire ¤ compte le nombre de carreaux jusqu\'à l\'axe, puis on reporte ce nombre le long de l\'axe ¤ trace un cercle centré sur le point ¤ additionne les coordonnées du point à celles de l\'axe',
                explanation: 'On suit une ligne perpendiculaire à l\'axe, on compte les carreaux qui séparent le point de l\'axe, puis on reporte ce même nombre de <strong>l\'autre côté</strong>.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/></svg><p style="margin-top:8px;">Un rectangle qui n\'est pas un carré possède...</p>', a: 'exactement deux axes de symétrie' },
                options: 'exactement deux axes de symétrie ¤ exactement quatre axes de symétrie ¤ un seul axe de symétrie ¤ aucun axe de symétrie',
                explanation: 'Un rectangle non carré possède <strong>deux</strong> axes de symétrie : les deux droites qui passent par les milieux de ses côtés opposés (ses diagonales, elles, ne sont pas des axes de symétrie).<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:190px; display:block; margin:10px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/><line x1="200" y1="30" x2="200" y2="250" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="30" y1="140" x2="370" y2="140" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/></svg>'
            }
        ],

    "508411": [
            {
                quiz: { q: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><circle cx="50" cy="170" r="4.5" fill="#2E5C8A"/><text x="34" y="164" font-size="15" fill="#2E5C8A" font-weight="bold">A</text><circle cx="150" cy="110" r="4.5" fill="#B5651D"/><text x="158" y="104" font-size="15" fill="#B5651D" font-weight="bold">O</text><circle cx="250" cy="50" r="4.5" fill="#2F7D3C"/><text x="258" y="44" font-size="15" fill="#2F7D3C" font-weight="bold">A\'</text></svg><p style="margin-top:8px;">Deux points $A$ et $A\'$ sont symétriques par rapport à un point $O$ lorsque...</p>', a: 'O est le milieu du segment [AA\']' },
                options: 'O est le milieu du segment [AA\'] ¤ O est équidistant de A et de A\', sans autre condition ¤ O appartient à la médiatrice de [AA\'] ¤ la droite (OA) est perpendiculaire à la droite (OA\')',
                explanation: 'La définition de la symétrie centrale est simple : $O$ doit être exactement le <strong>milieu</strong> du segment $[AA\']$. Attention, trois pièges classiques donnent une fausse impression de symétrie :<br><strong>1) Être seulement équidistant ne suffit pas</strong> — il faut aussi être aligné avec les deux points.<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" style="max-width:230px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="20" y1="170" x2="230" y2="170" stroke="#bbb" stroke-width="1.5" stroke-dasharray="6 5"/><line x1="140" y1="170" x2="160" y2="93" stroke="#2F7D3C" stroke-width="2.5"/><line x1="60" y1="170" x2="140" y2="170" stroke="#2E5C8A" stroke-width="2.5"/><circle cx="60" cy="170" r="4.5" fill="#2E5C8A"/><text x="46" y="186" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="140" cy="170" r="5" fill="#B5651D"/><text x="146" y="163" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="160" cy="93" r="4.5" fill="#2F7D3C"/><text x="168" y="90" font-size="14" fill="#2F7D3C" font-weight="bold">A\'\'</text><line x1="94" y1="164" x2="104" y2="176" stroke="#2E5C8A" stroke-width="2"/><line x1="146" y1="136" x2="156" y2="146" stroke="#2F7D3C" stroke-width="2"/></svg><p style="margin-top:4px;">Ici $OA = OA\'\'$ (les deux petits traits égaux), mais $A$, $O$ et $A\'\'$ ne sont <strong>pas alignés</strong> (la ligne pointillée montre où devrait se trouver le vrai symétrique) : $A\'\'$ n\'est donc pas l\'image de $A$.</p><strong>2) Être sur une perpendiculaire ne suffit pas</strong> — il faut aussi l\'égalité des longueurs.<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="70" y1="150" x2="130" y2="150" stroke="#2E5C8A" stroke-width="2.5"/><line x1="130" y1="150" x2="130" y2="110" stroke="#2F7D3C" stroke-width="2.5"/><rect x="120" y="140" width="10" height="10" fill="none" stroke="#333" stroke-width="1.5"/><circle cx="70" cy="150" r="4.5" fill="#2E5C8A"/><text x="56" y="166" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="130" cy="150" r="5" fill="#B5651D"/><text x="136" y="142" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="130" cy="110" r="4.5" fill="#2F7D3C"/><text x="138" y="106" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text></svg><p style="margin-top:4px;">Ici $(OA) \\perp (OA\')$ (le petit carré marque l\'angle droit), mais $OA \\neq OA\'$ : $O$ n\'est pas le milieu de $[AA\']$.</p><strong>3) Être sur la médiatrice ne suffit pas</strong> — elle donne seulement $OA = OA\'$, pas l\'alignement.<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="130" y1="20" x2="130" y2="200" stroke="#2e8b57" stroke-width="2" stroke-dasharray="7 5"/><line x1="60" y1="150" x2="200" y2="150" stroke="#999" stroke-width="1.5"/><circle cx="60" cy="150" r="4.5" fill="#2E5C8A"/><text x="46" y="166" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="200" cy="150" r="4.5" fill="#2F7D3C"/><text x="206" y="166" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><line x1="60" y1="150" x2="130" y2="60" stroke="#2E5C8A" stroke-width="1.5"/><line x1="200" y1="150" x2="130" y2="60" stroke="#2F7D3C" stroke-width="1.5"/><circle cx="130" cy="60" r="5" fill="#B5651D"/><text x="136" y="52" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg><p style="margin-top:4px;">$O$ est bien sur la médiatrice de $[AA\']$ (donc $OA = OA\'$), mais $O$ n\'est pas sur la droite $(AA\')$ : ce n\'est pas le milieu de $[AA\']$.</p>'
            },
            {
                quiz: { q: 'La symétrie centrale est aussi appelée...', a: 'le demi-tour' },
                options: 'le demi-tour ¤ Symétrie d\'axe (d) ¤ une rotation d\'un quart de tour ¤ une rotation d\'un tour complet',
                explanation: 'On appelle aussi la symétrie centrale le <strong>demi-tour</strong>, car elle correspond à une rotation de 180° autour du centre.'
            },
            {
                quiz: { q: 'Un demi-tour correspond à une rotation de...', a: '180°' },
                options: '180° ¤ 90° ¤ 360° ¤ 270°',
                explanation: 'Un demi-tour, c\'est la moitié d\'un tour complet (360°), soit exactement <strong>180°</strong>.'
            },
            {
                quiz: { q: 'La symétrie centrale conserve...', a: 'les longueurs, les angles, le parallélisme et les aires' },
                options: 'les longueurs, les angles, le parallélisme et les aires ¤ uniquement les longueurs ¤ uniquement les angles ¤ aucune de ces grandeurs',
                explanation: 'La symétrie centrale conserve les longueurs, les angles, le <strong>parallélisme</strong> et donc les aires des figures.<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:10px auto; font-family:sans-serif;"><polygon points="60,190 140,190 100,120" fill="#2E5C8A" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/><text x="48" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="146" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="100" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><polygon points="340,90 260,90 300,160" fill="#2F7D3C" fill-opacity="0.08" stroke="#2F7D3C" stroke-width="2.5"/><text x="346" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><text x="240" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><text x="304" y="176" font-size="14" fill="#2F7D3C" font-weight="bold">C\'</text><circle cx="200" cy="140" r="5" fill="#B5651D"/><text x="206" y="132" font-size="14" fill="#B5651D" font-weight="bold">O</text><line x1="60" y1="190" x2="340" y2="90" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="140" y1="190" x2="260" y2="90" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="100" y1="120" x2="300" y2="160" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="95" y1="195" x2="105" y2="185" stroke="#2E5C8A" stroke-width="2"/><line x1="295" y1="95" x2="305" y2="85" stroke="#2F7D3C" stroke-width="2"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"> <text x="15" y="115" font-size="55" font-family="sans-serif" font-weight="bold" fill="#2E5C8A">R</text> <text x="15" y="115" font-size="55" font-family="sans-serif" font-weight="bold" fill="#2F7D3C" transform="rotate(180 110 70)">R</text> <line x1="104" y1="70" x2="116" y2="70" stroke="#333" stroke-width="2"/> <line x1="110" y1="64" x2="110" y2="76" stroke="#333" stroke-width="2"/> <text x="116" y="64" font-size="13" fill="#333" font-weight="bold">a</text> <line x1="84" y1="90" x2="96" y2="90" stroke="#333" stroke-width="2"/> <line x1="90" y1="84" x2="90" y2="96" stroke="#333" stroke-width="2"/> <text x="96" y="84" font-size="13" fill="#333" font-weight="bold">b</text> <line x1="124" y1="40" x2="136" y2="40" stroke="#333" stroke-width="2"/> <line x1="130" y1="34" x2="130" y2="46" stroke="#333" stroke-width="2"/> <text x="136" y="34" font-size="13" fill="#333" font-weight="bold">c</text> </svg><p style="margin-top:8px;">Quel est le point qui est le centre de symétrie entre la lettre R bleue et son image verte ?</p>', a: 'Le point a' },
                options: 'Le point a ¤ Le point b ¤ Le point c',
                explanation: 'Le centre de symétrie doit être le <strong>milieu</strong> exact du segment reliant chaque point à son image : seul le point a vérifie cette condition ici.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="50" y1="180" x2="140" y2="140" stroke="#2E5C8A" stroke-width="2.5"/><circle cx="50" cy="180" r="4" fill="#2E5C8A"/><text x="34" y="196" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="140" cy="140" r="4" fill="#2E5C8A"/><text x="148" y="134" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><line x1="350" y1="60" x2="260" y2="100" stroke="#2F7D3C" stroke-width="2.5"/><circle cx="350" cy="60" r="4" fill="#2F7D3C"/><text x="358" y="54" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><circle cx="260" cy="100" r="4" fill="#2F7D3C"/><text x="220" y="94" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><circle cx="200" cy="120" r="5" fill="#B5651D"/><text x="206" y="112" font-size="14" fill="#B5651D" font-weight="bold">O</text><line x1="50" y1="180" x2="350" y2="60" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/><line x1="140" y1="140" x2="260" y2="100" stroke="#999" stroke-width="1.2" stroke-dasharray="4 4"/></svg><p style="margin-top:8px;">Si les segments $[AB]$ et $[A\'B\']$ sont symétriques par rapport à un point $O$, alors les droites $(AB)$ et $(A\'B\')$ sont...</p>', a: 'parallèles' },
                options: 'parallèles ¤ perpendiculaires ¤ confondues ¤ toujours sécantes en O',
                explanation: 'C\'est une propriété importante de la symétrie centrale : l\'image d\'une droite est une droite qui lui est <strong>parallèle</strong> (contrairement à la symétrie axiale, où le segment reliant un point à son image est perpendiculaire à l\'axe).'
            },
            {
                quiz: { q: '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="70" y1="140" x2="330" y2="140" stroke="#999" stroke-width="1.5" stroke-dasharray="6 5"/><circle cx="70" cy="140" r="4.5" fill="#2E5C8A"/><text x="58" y="128" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><circle cx="180" cy="140" r="5" fill="#B5651D"/><text x="186" y="130" font-size="14" fill="#B5651D" font-weight="bold">O</text><path d="M 280,93 A 110,110 0 0 1 280,187" fill="none" stroke="#999" stroke-width="1.3" stroke-dasharray="3 3"/><circle cx="290" cy="140" r="4.5" fill="#2F7D3C"/><text x="296" y="130" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text></svg><p style="margin-top:8px;">Pour construire le symétrique d\'un point $A$ par rapport à $O$, on...</p>', a: 'trace la demi-droite d\'origine A passant par O, puis on reporte au compas la longueur OA de l\'autre côté de O' },
                options: 'trace la demi-droite d\'origine A passant par O, puis on reporte au compas la longueur OA de l\'autre côté de O ¤ trace la perpendiculaire à (OA) passant par O ¤ trace un cercle de centre A passant par O ¤ trace la médiatrice du segment [OA]',
                explanation: 'On trace la demi-droite $[AO)$, puis on reporte la longueur $OA$ de l\'autre côté de $O$ à l\'aide du compas (l\'arc pointillé représente ce report) : on obtient ainsi le point $A\'$ tel que $O$ soit le <strong>milieu</strong> de $[AA\']$.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"> <line x1="0" y1="0" x2="0" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="20" y1="0" x2="20" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="40" y1="0" x2="40" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="60" y1="0" x2="60" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="80" y1="0" x2="80" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="100" y1="0" x2="100" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="120" y1="0" x2="120" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="140" y1="0" x2="140" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="160" y1="0" x2="160" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="180" y1="0" x2="180" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="200" y1="0" x2="200" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="220" y1="0" x2="220" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="240" y1="0" x2="240" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="260" y1="0" x2="260" y2="200" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="0" x2="260" y2="0" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="20" x2="260" y2="20" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="40" x2="260" y2="40" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="60" x2="260" y2="60" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="80" x2="260" y2="80" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="100" x2="260" y2="100" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="120" x2="260" y2="120" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="140" x2="260" y2="140" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="160" x2="260" y2="160" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="180" x2="260" y2="180" stroke="#e8e8e8" stroke-width="1"/> <line x1="0" y1="200" x2="260" y2="200" stroke="#e8e8e8" stroke-width="1"/> <circle cx="40" cy="150" r="4" fill="#2E5C8A"/> <text x="24" y="144" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <circle cx="140" cy="110" r="4.5" fill="#B5651D"/> <text x="148" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <circle cx="240" cy="70" r="4" fill="#333"/> <text x="220" y="58" font-size="14" fill="#333" font-weight="bold">c</text> <circle cx="240" cy="110" r="4" fill="#333"/> <text x="220" y="128" font-size="14" fill="#333" font-weight="bold">a</text> <circle cx="200" cy="70" r="4" fill="#333"/> <text x="200" y="58" font-size="14" fill="#333" font-weight="bold">b</text> </svg><p style="margin-top:8px;">Sur la figure, quel point est l\'image du point $A$ par la symétrie de centre $O$ ?</p>', a: 'Le point c' },
                options: 'Le point a ¤ Le point b ¤ Le point c',
                explanation: 'Il faut que $O$ soit le milieu du segment reliant $A$ à son image. C\'est le cas uniquement pour le <strong>point c</strong> : $A$, $O$ et $c$ sont alignés, et les petits traits égaux ci-dessous montrent que $O$ est bien équidistant de $A$ et de $c$.<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"> <circle cx="40" cy="150" r="4" fill="#2E5C8A"/> <text x="24" y="144" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <circle cx="140" cy="110" r="4.5" fill="#B5651D"/> <text x="148" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <circle cx="240" cy="70" r="4" fill="#2F7D3C"/> <text x="220" y="58" font-size="14" fill="#2F7D3C" font-weight="bold">c</text> <circle cx="240" cy="110" r="4" fill="#999"/> <text x="220" y="128" font-size="14" fill="#999" font-weight="bold">a</text> <circle cx="200" cy="70" r="4" fill="#999"/> <text x="200" y="58" font-size="14" fill="#999" font-weight="bold">b</text> <line x1="40" y1="150" x2="240" y2="70" stroke="#2F7D3C" stroke-width="1.5" stroke-dasharray="4 4"/> <line x1="87.8" y1="124.4" x2="92.2" y2="135.6" stroke="#333" stroke-width="2"/> <line x1="187.8" y1="84.4" x2="192.2" y2="95.6" stroke="#333" stroke-width="2"/> </svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="110,40 50,140 170,140" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="100" y="30" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="30" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="176" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">C</text></svg><p style="margin-top:8px;">Un triangle équilatéral possède...</p>', a: 'aucun centre de symétrie' },
                options: 'aucun centre de symétrie ¤ un centre de symétrie confondu avec son centre de gravité ¤ trois centres de symétrie ¤ un centre de symétrie par sommet',
                explanation: 'Attention, c\'est un piège classique : le triangle équilatéral a une symétrie de rotation d\'ordre 3 (120°), mais <strong>aucun</strong> point ne le transforme en lui-même par un demi-tour (180°). Si l\'on tente de faire tourner le sommet $A$ d\'un demi-tour autour de son centre de gravité $G$, on tombe en dehors du triangle : $G$ n\'est donc pas un centre de symétrie. Le triangle équilatéral n\'a donc pas de centre de symétrie.<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="110,40 50,140 170,140" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="100" y="30" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="30" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="176" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><circle cx="110" cy="107" r="4.5" fill="#B5651D"/><text x="116" y="100" font-size="13" fill="#B5651D" font-weight="bold">G</text><line x1="110" y1="40" x2="110" y2="174" stroke="#999" stroke-width="2" stroke-dasharray="6 5"/><circle cx="110" cy="174" r="5" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="3 3"/><text x="118" y="188" font-size="13" fill="#c0392b" font-weight="bold">?</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="50,150 160,150 190,60 80,60" fill="#2E5C8A" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/><text x="36" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="166" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="194" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><text x="66" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">D</text></svg><p style="margin-top:8px;">Un parallélogramme (qui n\'est ni un rectangle, ni un losange) possède...</p>', a: 'un centre de symétrie : le point d\'intersection de ses diagonales' },
                options: 'un centre de symétrie : le point d\'intersection de ses diagonales ¤ deux centres de symétrie ¤ aucun centre de symétrie ¤ un axe de symétrie mais aucun centre',
                explanation: 'Tout parallélogramme possède un centre de symétrie : le <strong>point d\'intersection de ses diagonales</strong>, comme le montre le point $O$ sur la figure.<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="50,150 160,150 190,60 80,60" fill="#2E5C8A" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/><text x="36" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="166" y="168" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="194" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><text x="66" y="56" font-size="14" fill="#2E5C8A" font-weight="bold">D</text><line x1="50" y1="150" x2="190" y2="60" stroke="#2F7D3C" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="160" y1="150" x2="80" y2="60" stroke="#2F7D3C" stroke-width="1.8" stroke-dasharray="5 4"/><circle cx="120" cy="105" r="5" fill="#B5651D"/><text x="128" y="98" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><circle cx="130" cy="110" r="70" fill="none" stroke="#2E5C8A" stroke-width="2.5"/></svg><p style="margin-top:8px;">Un cercle possède...</p>', a: 'un centre de symétrie : son centre' },
                options: 'un centre de symétrie : son centre ¤ aucun centre de symétrie ¤ une infinité de centres de symétrie ¤ un centre de symétrie situé sur le cercle lui-même',
                explanation: 'Le centre du cercle est équidistant de tous ses points : chaque point $P$ a pour image un point $P\'$ tel que $O$ soit le milieu de $[PP\']$ (comme $Q$ et $Q\'$ sur la figure). C\'est bien un <strong>centre de symétrie</strong> pour le cercle.<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto; font-family:sans-serif;"><circle cx="130" cy="110" r="70" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><circle cx="130" cy="110" r="5" fill="#B5651D"/><text x="138" y="105" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="196" cy="86" r="4" fill="#2F7D3C"/><text x="202" y="82" font-size="13" fill="#2F7D3C" font-weight="bold">P</text><circle cx="64" cy="134" r="4" fill="#2F7D3C"/><text x="38" y="148" font-size="13" fill="#2F7D3C" font-weight="bold">P\'</text><line x1="196" y1="86" x2="64" y2="134" stroke="#2F7D3C" stroke-width="1.5" stroke-dasharray="4 4"/><circle cx="118" cy="41" r="4" fill="#8e44ad"/><text x="98" y="32" font-size="13" fill="#8e44ad" font-weight="bold">Q</text><circle cx="142" cy="179" r="4" fill="#8e44ad"/><text x="148" y="192" font-size="13" fill="#8e44ad" font-weight="bold">Q\'</text><line x1="118" y1="41" x2="142" y2="179" stroke="#8e44ad" stroke-width="1.5" stroke-dasharray="4 4"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:190px; display:block; margin:8px auto;"><rect x="70" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="134" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="70" y="92" width="80" height="16" fill="#2E5C8A"/></svg><p style="margin-top:8px;">Combien d\'axes et de centre de symétrie possède la lettre $H$ majuscule ?</p>', a: '2 axes et 1 centre' },
                options: '2 axes et 1 centre ¤ 1 axe et 1 centre ¤ 2 axes et 0 centre ¤ 0 axe et 1 centre',
                explanation: 'La lettre H a un axe vertical, un axe horizontal <strong>et</strong> un centre de symétrie situé à leur intersection, comme le montre la figure ci-dessous.<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:190px; display:block; margin:8px auto;"><rect x="70" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="134" y="40" width="16" height="120" fill="#2E5C8A"/><rect x="70" y="92" width="80" height="16" fill="#2E5C8A"/><line x1="110" y1="15" x2="110" y2="185" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="25" y1="100" x2="195" y2="100" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="110" cy="100" r="5" fill="#B5651D"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:8px auto; font-family:sans-serif;"><text x="20" y="155" font-size="100" font-family="sans-serif" font-weight="bold" fill="#2E5C8A">S</text></svg><p style="margin-top:8px;">Combien d\'axes et de centre de symétrie possède la lettre $S$ majuscule ?</p>', a: '0 axe et 1 centre' },
                options: '0 axe et 1 centre ¤ 1 axe et 1 centre ¤ 2 axes et 0 centre ¤ 1 axe et 0 centre',
                explanation: 'La lettre S n\'a <strong>aucun axe</strong> de symétrie (aucune ligne de pliage ne la superpose à elle-même), mais elle possède un <strong>centre</strong> de symétrie : elle se superpose à elle-même après un demi-tour autour de ce point.<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg" style="max-width:170px; display:block; margin:8px auto; font-family:sans-serif;"><text x="20" y="155" font-size="100" font-family="sans-serif" font-weight="bold" fill="#2E5C8A">S</text><circle cx="56" cy="118" r="5" fill="#B5651D"/><text x="64" y="112" font-size="13" fill="#B5651D" font-weight="bold">O</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/></svg><p style="margin-top:8px;">Un rectangle qui n\'est pas un carré possède...</p>', a: '2 axes de symétrie et 1 centre de symétrie' },
                options: '2 axes de symétrie et 1 centre de symétrie ¤ 4 axes de symétrie et 1 centre de symétrie ¤ 0 axe de symétrie et 1 centre de symétrie ¤ 2 axes de symétrie et 0 centre de symétrie',
                explanation: 'Un rectangle non carré a deux axes de symétrie (parallèles aux côtés) et un centre de symétrie : le <strong>point d\'intersection de ses diagonales</strong>, marqué en orange à l\'intersection des deux axes.<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:200px; display:block; margin:8px auto;"><rect x="60" y="60" width="280" height="160" fill="#3333ff" fill-opacity="0.1" stroke="#3333ff" stroke-width="3"/><line x1="200" y1="30" x2="200" y2="250" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="30" y1="140" x2="370" y2="140" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="200" cy="140" r="6" fill="#B5651D"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto;"><polygon points="80,140 200,70 320,140 200,210" fill="#8e44ad" fill-opacity="0.1" stroke="#8e44ad" stroke-width="3"/></svg><p style="margin-top:8px;">Un losange qui n\'est pas un carré possède...</p>', a: '2 axes de symétrie (ses diagonales) et 1 centre de symétrie' },
                options: '2 axes de symétrie (ses diagonales) et 1 centre de symétrie ¤ 4 axes de symétrie et 1 centre de symétrie ¤ 0 axe de symétrie et 1 centre de symétrie ¤ 2 axes de symétrie et 0 centre de symétrie',
                explanation: 'Les <strong>diagonales</strong> d\'un losange sont ses deux axes de symétrie, et leur point d\'intersection est son centre de symétrie.<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="max-width:220px; display:block; margin:8px auto;"><polygon points="80,140 200,70 320,140 200,210" fill="#8e44ad" fill-opacity="0.1" stroke="#8e44ad" stroke-width="3"/><line x1="60" y1="140" x2="340" y2="140" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><line x1="200" y1="50" x2="200" y2="230" stroke="#2e8b57" stroke-width="2.5" stroke-dasharray="8 6"/><circle cx="200" cy="140" r="6" fill="#B5651D"/></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="60,190 140,190 100,120" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="48" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="146" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="100" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><polygon points="340,90 260,90 300,160" fill="none" stroke="#2F7D3C" stroke-width="2.5"/><text x="346" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><text x="240" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><text x="304" y="176" font-size="14" fill="#2F7D3C" font-weight="bold">C\'</text><circle cx="200" cy="140" r="5" fill="#B5651D"/><text x="206" y="132" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg><p style="margin-top:8px;">Si un triangle $ABC$ a pour image le triangle $A\'B\'C\'$ par une symétrie centrale, alors...</p>', a: 'les deux triangles ont exactement les mêmes longueurs de côtés et les mêmes angles' },
                options: 'les deux triangles ont exactement les mêmes longueurs de côtés et les mêmes angles ¤ les deux triangles ont les mêmes angles mais pas forcément les mêmes longueurs ¤ seul le périmètre est conservé, pas les angles ¤ aucune grandeur n\'est nécessairement conservée',
                explanation: 'La symétrie centrale conserve toutes les longueurs et tous les angles, donc les deux triangles sont <strong>superposables</strong> (on retrouve les mêmes mesures des deux côtés).<svg viewBox="0 0 380 220" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="60,190 140,190 100,120" fill="none" stroke="#2E5C8A" stroke-width="2.5"/><text x="48" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">A</text><text x="146" y="206" font-size="14" fill="#2E5C8A" font-weight="bold">B</text><text x="100" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">C</text><text x="90" y="212" font-size="12" fill="#1A1A1A">6 cm</text><text x="115" y="150" font-size="12" fill="#1A1A1A">5 cm</text><text x="62" y="150" font-size="12" fill="#1A1A1A">4 cm</text><polygon points="340,90 260,90 300,160" fill="none" stroke="#2F7D3C" stroke-width="2.5"/><text x="346" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">A\'</text><text x="240" y="80" font-size="14" fill="#2F7D3C" font-weight="bold">B\'</text><text x="304" y="176" font-size="14" fill="#2F7D3C" font-weight="bold">C\'</text><text x="290" y="72" font-size="12" fill="#1A1A1A">6 cm</text><text x="313" y="132" font-size="12" fill="#1A1A1A">4 cm</text><text x="264" y="132" font-size="12" fill="#1A1A1A">5 cm</text><circle cx="200" cy="140" r="5" fill="#B5651D"/><text x="206" y="132" font-size="14" fill="#B5651D" font-weight="bold">O</text></svg>'
            },
            {
                quiz: { q: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"> <polygon points="40,60 110,60 90,20" fill="none" stroke="#2E5C8A" stroke-width="2.5"/> <text x="28" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <text x="114" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B</text> <text x="90" y="14" font-size="14" fill="#2E5C8A" font-weight="bold">C</text> <text x="65" y="76" font-size="12" fill="#1A1A1A">5 cm</text> <text x="106" y="42" font-size="12" fill="#1A1A1A">3,5 cm</text> <text x="52" y="42" font-size="12" fill="#1A1A1A">4 cm</text> <circle cx="150" cy="110" r="4" fill="#B5651D"/> <text x="158" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <polygon points="260,160 190,160 210,200" fill="none" stroke="#2F7D3C" stroke-width="2.5"/> <text x="264" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">E</text> <text x="172" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">F</text> <text x="212" y="216" font-size="14" fill="#2F7D3C" font-weight="bold">G</text> </svg><p style="margin-top:8px;">Les triangles $ABC$ et $EFG$ sont symétriques par rapport à $O$. Quel segment mesure 3,5 cm ?</p>', a: '[FG]' },
                options: '[EF] ¤ [FG] ¤ [GE]',
                explanation: 'On repère facilement les côtés symétriques car ils sont parallèles entre deux. le segment $[BC]$ (qui mesure $3,5$ cm) est parallèle au segment <strong>$[FG]$</strong>, $[FG]$ est donc l\'image de $[BC]$ il mesure donc la même longueur que $[BC]$ : $3,5$ cm.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" style="max-width:300px; display:block; margin:8px auto; font-family:sans-serif;"> <polygon points="40,60 110,60 90,20" fill="none" stroke="#2E5C8A" stroke-width="2.5"/> <text x="28" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">A</text> <text x="114" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B</text> <text x="90" y="14" font-size="14" fill="#2E5C8A" font-weight="bold">C</text> <text x="65" y="76" font-size="12" fill="#1A1A1A">5 cm</text> <text x="106" y="42" font-size="12" fill="#1A1A1A">3,5 cm</text> <text x="52" y="42" font-size="12" fill="#1A1A1A">4 cm</text> <circle cx="150" cy="110" r="4" fill="#B5651D"/> <text x="158" y="104" font-size="14" fill="#B5651D" font-weight="bold">O</text> <polygon points="260,160 190,160 210,200" fill="none" stroke="#2F7D3C" stroke-width="2.5"/> <text x="264" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">E</text> <text x="172" y="164" font-size="14" fill="#2F7D3C" font-weight="bold">F</text> <text x="212" y="216" font-size="14" fill="#2F7D3C" font-weight="bold">G</text> </svg><p style="margin-top:8px;">Quel est le périmètre du triangle $EFG$ ?</p>', a: '12,5 cm' },
                options: '12,5 cm ¤ 70 cm ¤ 6,25 cm ¤ On ne peut pas savoir',
                explanation: 'Le périmètre de $ABC$ vaut $5 + 3,5 + 4 = 12,5$ cm. La symétrie centrale conserve les longueurs, donc le triangle $EFG$ a exactement le <strong>même périmètre</strong>.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" style="max-width:280px; display:block; margin:8px auto; font-family:sans-serif;"><line x1="70" y1="150" x2="290" y2="150" stroke="#666" stroke-width="2"/><circle cx="70" cy="150" r="4.5" fill="#2E5C8A"/><text x="58" y="138" font-size="14" fill="#2E5C8A" font-weight="bold">P</text><circle cx="180" cy="150" r="5" fill="#B5651D"/><text x="186" y="140" font-size="14" fill="#B5651D" font-weight="bold">O</text><circle cx="290" cy="150" r="4.5" fill="#2F7D3C"/><text x="296" y="140" font-size="14" fill="#2F7D3C" font-weight="bold">P\'</text><line x1="122" y1="144" x2="132" y2="156" stroke="#333" stroke-width="2"/><line x1="232" y1="144" x2="242" y2="156" stroke="#333" stroke-width="2"/></svg><p style="margin-top:8px;">Pour vérifier que deux figures sont symétriques par rapport à un point $O$, on peut...</p>', a: 'relier un point à son image et vérifier que le segment passe par O, qui en est le milieu' },
                options: 'relier un point à son image et vérifier que le segment passe par O, qui en est le milieu ¤ vérifier qu\'elles ont un axe de symétrie commun ¤ mesurer un angle de 90° entre les deux figures ¤ vérifier qu\'elles sont parallèles à une droite fixée à l\'avance',
                explanation: 'C\'est la définition même de la symétrie centrale : chaque point et son image doivent être alignés avec $O$ (comme $P$ et $P\'$ sur la figure), et les petits traits égaux montrent que $O$ en est bien le <strong>milieu</strong>.'
            },
            {
                quiz: { q: '<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="max-width:320px; display:block; margin:8px auto; font-family:sans-serif;"><polygon points="30,150 70,150 50,110" fill="none" stroke="#2E5C8A" stroke-width="2"/><circle cx="100" cy="120" r="4" fill="#B5651D"/><polygon points="170,90 130,90 150,130" fill="none" stroke="#2F7D3C" stroke-width="2"/><text x="42" y="178" font-size="11" fill="#333">Symétrie centrale</text><line x1="280" y1="55" x2="280" y2="180" stroke="#2e8b57" stroke-width="2" stroke-dasharray="6 5"/><polygon points="230,150 260,150 245,110" fill="none" stroke="#2E5C8A" stroke-width="2"/><polygon points="330,150 300,150 315,110" fill="none" stroke="#2F7D3C" stroke-width="2"/><text x="248" y="178" font-size="11" fill="#333">Symétrie axiale</text></svg><p style="margin-top:8px;">La symétrie centrale et la symétrie axiale ont en commun de conserver...</p>', a: 'les longueurs et les angles' },
                options: 'les longueurs et les angles¤ uniquement le parallélisme ¤ les aires mais pas le périmètre ¤ aucune propriété commune',
                explanation: 'La symétrie axiale et la symétrie centrale conservent chacune les longueurs et les angles.'
            }
        ],

    // ============================================================
    // QCM — PROPRIÉTÉS DE LA SYMÉTRIE CENTRALE (clé Supabase 508231)
    // 10 questions, 5 formes (2 de chaque) : longueurs, angles, aires,
    // "image d'une droite = droite parallèle", parallélisme conservé.
    // Les mêmes 5 réponses possibles sont proposées à chaque question ;
    // seule celle qui correspond change.
    // ============================================================
    "508231": [

            // --- FORME "longueurs" (Q1 : donnée sur la figure d'origine) ---
            {
                quiz: { q: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" style="max-width:400px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="40,220 140,240 160,150 70,120" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="24" y="232" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="144" y="256" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="166" y="146" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="52" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<text x="76" y="242" font-size="12" fill="#333">AB = 4,5 cm</text>' +
                        '<polygon points="400,80 300,60 280,150 370,180" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="406" y="76" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="304" y="52" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="284" y="146" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="374" y="196" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<circle cx="220" cy="150" r="3.5" fill="#B5651D"/><text x="226" y="146" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABCD$ et $A\'B\'C\'D\'$ sont symétriques par rapport à $O$. Sachant que $AB = 4{,}5$ cm, quelle propriété utilise-t-on pour trouver $A\'B\' = ...$ ?</p>', a: 'La symétrie centrale conserve les longueurs' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'La symétrie centrale conserve les longueurs : $A\'B\' = AB = 4{,}5$ cm.'
            },

            // --- FORME "longueurs" (Q2 : donnée sur l'image, cette fois) ---
            {
                quiz: { q: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" style="max-width:400px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="40,220 140,240 160,150 70,120" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="24" y="232" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="144" y="256" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="166" y="146" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="52" y="112" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<polygon points="400,80 300,60 280,150 370,180" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="406" y="76" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="304" y="52" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="284" y="146" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="374" y="196" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<text x="286" y="100" font-size="12" fill="#333">B\'C\' = 3,2 cm</text>' +
                        '<circle cx="220" cy="150" r="3.5" fill="#B5651D"/><text x="226" y="146" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABCD$ et $A\'B\'C\'D\'$ sont symétriques par rapport à $O$. Sachant que $B\'C\' = 3{,}2$ cm, quelle propriété utilise-t-on pour trouver $BC = ...$ ?</p>', a: 'La symétrie centrale conserve les longueurs' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'La symétrie centrale conserve les longueurs : $BC = B\'C\' = 3{,}2$ cm.'
            },

            // --- FORME "angles" (Q3 : donnée sur la figure d'origine) ---
            {
                quiz: { q: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="60,220 160,220 120,140" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="46" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="164" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="112" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="150" y="212" font-size="12" fill="#333">$\\widehat{ABC} = 55°$</text>' +
                        '<polygon points="440,140 340,140 380,220" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="444" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="316" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="384" y="238" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<circle cx="250" cy="180" r="3.5" fill="#B5651D"/><text x="256" y="176" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABC$ et $A\'B\'C\'$ sont symétriques par rapport à $O$. Sachant que $\\widehat{ABC} = 55°$, quelle propriété utilise-t-on pour trouver $\\widehat{A\'B\'C\'} = ...$ ?</p>', a: 'La symétrie centrale conserve les angles' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'La symétrie centrale conserve les angles : $\\widehat{A\'B\'C\'} = \\widehat{ABC} = 55°$.'
            },

            // --- FORME "angles" (Q4 : donnée sur l'image, cette fois) ---
            {
                quiz: { q: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" style="max-width:420px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="60,220 160,220 120,140" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="46" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="164" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="112" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<polygon points="440,140 340,140 380,220" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="444" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="316" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="384" y="238" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="322" y="160" font-size="12" fill="#333">$\\widehat{A\'B\'C\'} = 68°$</text>' +
                        '<circle cx="250" cy="180" r="3.5" fill="#B5651D"/><text x="256" y="176" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABC$ et $A\'B\'C\'$ sont symétriques par rapport à $O$. Sachant que $\\widehat{A\'B\'C\'} = 68°$, quelle propriété utilise-t-on pour trouver $\\widehat{ABC} = ...$ ?</p>', a: 'La symétrie centrale conserve les angles' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'La symétrie centrale conserve les angles : $\\widehat{ABC} = \\widehat{A\'B\'C\'} = 68°$.'
            },

            // --- FORME "aires" (Q5 : donnée sur la figure d'origine) ---
            {
                quiz: { q: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="40,200 150,220 190,140 90,110" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="24" y="212" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="154" y="238" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="196" y="134" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="70" y="102" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<text x="90" y="175" font-size="12" fill="#333">Aire(ABCD) = 14 cm²</text>' +
                        '<polygon points="480,100 370,80 330,160 430,190" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="486" y="96" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="374" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="304" y="164" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="434" y="208" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<circle cx="260" cy="150" r="3.5" fill="#B5651D"/><text x="266" y="146" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABCD$ et $A\'B\'C\'D\'$ sont symétriques par rapport à $O$. Sachant que l\'aire de $ABCD$ vaut $14$ cm², quelle propriété utilise-t-on pour trouver l\'aire de $A\'B\'C\'D\' = ...$ ?</p>', a: 'La symétrie centrale conserve les aires' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'La symétrie centrale conserve les aires : l\'aire de $A\'B\'C\'D\'$ vaut aussi $14$ cm².'
            },

            // --- FORME "aires" (Q6 : donnée sur l'image, cette fois) ---
            {
                quiz: { q: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="40,200 150,220 190,140 90,110" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="24" y="212" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="154" y="238" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="196" y="134" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="70" y="102" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<polygon points="480,100 370,80 330,160 430,190" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="486" y="96" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="374" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="304" y="164" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="434" y="208" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<text x="368" y="130" font-size="12" fill="#333">Aire(A\'B\'C\'D\') = 14 cm²</text>' +
                        '<circle cx="260" cy="150" r="3.5" fill="#B5651D"/><text x="266" y="146" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABCD$ et $A\'B\'C\'D\'$ sont symétriques par rapport à $O$. Sachant que l\'aire de $A\'B\'C\'D\'$ vaut $14$ cm², quelle propriété utilise-t-on pour trouver l\'aire de $ABCD = ...$ ?</p>', a: 'La symétrie centrale conserve les aires' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'La symétrie centrale conserve les aires : l\'aire de $ABCD$ vaut aussi $14$ cm².'
            },

            // --- FORME "image d'une droite = droite parallèle" (Q7) ---
            {
                quiz: { q: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" style="max-width:400px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<line x1="60" y1="200" x2="160" y2="160" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<circle cx="60" cy="200" r="3.5" fill="#2E5C8A"/><text x="44" y="216" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<circle cx="160" cy="160" r="3.5" fill="#2E5C8A"/><text x="166" y="156" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<line x1="420" y1="100" x2="320" y2="140" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<circle cx="420" cy="100" r="3.5" fill="#2E5C8A"/><text x="426" y="96" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<circle cx="320" cy="140" r="3.5" fill="#2E5C8A"/><text x="298" y="150" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<circle cx="240" cy="150" r="3.5" fill="#B5651D"/><text x="246" y="146" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$A\'$ et $B\'$ sont les images de $A$ et $B$ par la symétrie centrale de centre $O$. Quelle propriété utilise-t-on pour dire que $(A\'B\')$ est parallèle à $(AB)$ ?</p>', a: 'Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'Cette propriété est vraie pour n\'importe quels deux points : le symétrique d\'une droite par une symétrie centrale est toujours une droite qui lui est parallèle (ce n\'est pas la même chose que "conserver le parallélisme", qui concerne deux droites déjà parallèles entre elles au départ).'
            },

            // --- FORME "image d'une droite = droite parallèle" (Q8) ---
            {
                quiz: { q: '<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:400px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<line x1="80" y1="220" x2="200" y2="180" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<circle cx="80" cy="220" r="3.5" fill="#2E5C8A"/><text x="64" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<circle cx="200" cy="180" r="3.5" fill="#2E5C8A"/><text x="206" y="176" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<line x1="460" y1="80" x2="340" y2="120" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<circle cx="460" cy="80" r="3.5" fill="#2E5C8A"/><text x="466" y="76" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<circle cx="340" cy="120" r="3.5" fill="#2E5C8A"/><text x="318" y="130" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<circle cx="270" cy="150" r="3.5" fill="#B5651D"/><text x="276" y="146" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$C\'$ et $D\'$ sont les images de $C$ et $D$ par la symétrie centrale de centre $O$. Quelle propriété utilise-t-on pour dire que $(C\'D\')$ est parallèle à $(CD)$ ?</p>', a: 'Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: 'Cette propriété est vraie pour n\'importe quels deux points : le symétrique d\'une droite par une symétrie centrale est toujours une droite qui lui est parallèle.'
            },

            // --- FORME "parallélisme conservé" (Q9 : AB // DC dans le trapèze) ---
            {
                quiz: { q: '<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="60,220 180,220 150,140 90,140" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="46" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="184" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="154" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="72" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<text x="90" y="205" font-size="12" fill="#333">(AB) // (DC)</text>' +
                        '<polygon points="460,140 340,140 370,220 430,220" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="466" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="316" y="132" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="374" y="238" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="430" y="238" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<circle cx="260" cy="180" r="3.5" fill="#B5651D"/><text x="266" y="176" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABCD$ et $A\'B\'C\'D\'$ sont symétriques par rapport à $O$. Sachant que $(AB)$ est parallèle à $(DC)$, quelle propriété utilise-t-on pour dire que $(A\'B\')$ est parallèle à $(D\'C\')$ ?</p>', a: 'La symétrie centrale conserve le parallélisme' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: '$(AB)$ et $(DC)$ étaient déjà parallèles avant la symétrie : la symétrie centrale conserve le parallélisme, donc leurs images $(A\'B\')$ et $(D\'C\')$ restent parallèles entre elles.'
            },

            // --- FORME "parallélisme conservé" (Q10 : AD // BC dans un autre quadrilatère) ---
            {
                quiz: { q: '<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" style="max-width:440px; display:block; margin:8px auto; font-family:sans-serif;">' +
                        '<polygon points="60,140 180,150 180,230 60,220" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="40" y="136" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                        '<text x="184" y="146" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                        '<text x="184" y="246" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                        '<text x="40" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">D</text>' +
                        '<text x="8" y="182" font-size="12" fill="#333">(AD) // (BC)</text>' +
                        '<polygon points="460,230 340,220 340,140 460,150" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                        '<text x="466" y="244" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                        '<text x="316" y="224" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                        '<text x="316" y="136" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
                        '<text x="466" y="146" font-size="14" fill="#2E5C8A" font-weight="bold">D\'</text>' +
                        '<circle cx="260" cy="185" r="3.5" fill="#B5651D"/><text x="266" y="181" font-size="13" fill="#B5651D" font-weight="bold">O</text>' +
                     '</svg><p style="margin-top:8px;">$ABCD$ et $A\'B\'C\'D\'$ sont symétriques par rapport à $O$. Sachant que $(AD)$ est parallèle à $(BC)$, quelle propriété utilise-t-on pour dire que $(A\'D\')$ est parallèle à $(B\'C\')$ ?</p>', a: 'La symétrie centrale conserve le parallélisme' },
                options: 'La symétrie centrale conserve les longueurs ¤ La symétrie centrale conserve les aires ¤ La symétrie centrale conserve les angles ¤ La symétrie centrale conserve le parallélisme ¤ Le symétrique d\'une droite par symétrie centrale est une droite qui lui est parallèle.',
                explanation: '$(AD)$ et $(BC)$ étaient déjà parallèles avant la symétrie : la symétrie centrale conserve le parallélisme, donc leurs images $(A\'D\')$ et $(B\'C\')$ restent parallèles entre elles.'
            }
        ]

};


// ============================================================
// Quiz de placement sur figure (tracer un axe / placer un centre)
// Utilisé par startPlacementQuiz() (moteur : quizPlacementEngine.js)
// Pas un QCM Supabase : pas de clé numérique, tableau simple.
// ============================================================

// la zone de dessin (overlay) se superpose parfaitement.
// ============================================================

// ============================================================
// Quiz de placement — SYMÉTRIE AXIALE UNIQUEMENT (clé Supabase 508121)
// 11 questions : que des axes à tracer (dont un piège sans axe).
// Remplace l'ancien QCM "508121" : ici l'élève trace lui-même l'axe au
// lieu de choisir une réponse dans une liste.
//
// IMPORTANT : plusieurs figures utilisent `rotation` + `rotationCenter`
// (voir js/quizPlacementEngine.js) pour empêcher que l'axe vertical (ou
// horizontal) soit "par hasard" toujours une bonne réponse :
//   - rotation: 'random'  -> angle aléatoire à chaque affichage, choisi
//     automatiquement pour ne JAMAIS retomber près de la verticale/
//     horizontale (l'élève doit vraiment positionner son tracé).
//   - rotation: <nombre>  -> rotation fixe (ex: 90 pour le trapèze, afin
//     de forcer un axe horizontal au lieu du vertical habituel).
//   - absent               -> figure non tournée (cercle, cœur, et les
//     deux figures à 45° qui ont un angle cible précis et déjà fixé).
// Dans tous les cas, `valid` reste exprimé dans le repère NON tourné :
// c'est le moteur qui calcule la rotation à l'affichage ET pour la
// correction, à partir de `rotationCenter`.
// ============================================================
const placementQuestions_5eme_chapitre08_axiale = [

    // 1) Deux segments symétriques l'un de l'autre -> 1 axe (rotation aléatoire).
    // Segments [DS] et [D'S'] : D(100,65) S(145,215) et leurs images D'(300,65)
    // S'(255,215) par la symétrie d'axe x=200 (vérifié par le calcul).
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<line x1="100" y1="65" x2="145" y2="215" stroke="#2E5C8A" stroke-width="3" stroke-linecap="round"/>' +
                '<circle cx="100" cy="65" r="4.5" fill="#2E5C8A"/><circle cx="145" cy="215" r="4.5" fill="#2E5C8A"/>' +
                '<line x1="300" y1="65" x2="255" y2="215" stroke="#2E5C8A" stroke-width="3" stroke-linecap="round"/>' +
                '<circle cx="300" cy="65" r="4.5" fill="#2E5C8A"/><circle cx="255" cy="215" r="4.5" fill="#2E5C8A"/>' +
             '</svg>',
        valid: [{ x1: 200, y1: 30, x2: 200, y2: 250 }],
        rotation: 'random',
        rotationCenter: { x: 200, y: 140 },
        explanation: 'Ces deux segments sont symétriques l\'un de l\'autre : l\'axe de symétrie est la médiatrice du segment qui joint deux points correspondants (par exemple les deux extrémités du haut). Les deux extrémités du bas donnent la même droite.'
    },

    // 2) Rectangle -> 2 axes possibles (rotation aléatoire)
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="80" y="75" width="240" height="130" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: [
            { x1: 200, y1: 55, x2: 200, y2: 225 },
            { x1: 60, y1: 140, x2: 340, y2: 140 }
        ],
        rotation: 'random',
        rotationCenter: { x: 200, y: 140 },
        explanation: 'Un rectangle (non carré) possède deux axes de symétrie : les médiatrices de ses côtés. Ses diagonales, elles, ne sont pas des axes de symétrie.'
    },

    // 3) Losange -> 2 axes (ses diagonales) (rotation aléatoire)
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="200,60 320,140 200,220 80,140" fill="#8e44ad" fill-opacity="0.1" stroke="#8e44ad" stroke-width="2.5"/>' +
             '</svg>',
        valid: [
            { x1: 200, y1: 55, x2: 200, y2: 225 },
            { x1: 75, y1: 140, x2: 325, y2: 140 }
        ],
        rotation: 'random',
        rotationCenter: { x: 200, y: 140 },
        explanation: 'Les deux diagonales d\'un losange sont ses deux axes de symétrie.'
    },

    // 4) Triangle isocèle "aigu", construit pour avoir son axe à 45° pile
    // (remplace l'ancienne question du carré). Pas de rotation aléatoire :
    // l'angle cible est volontairement fixé à 45°.
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;">' +
                '<polygon points="115.1,164.1 185.9,234.9 249.5,100.5" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: [{ x1: 263.6, y1: 86.4, x2: 136.4, y2: 213.6 }],
        explanation: 'L\'axe de symétrie d\'un triangle isocèle passe par le sommet principal et le milieu du côté opposé : ici, il forme un angle de 45° avec l\'horizontale.'
    },

    // 5) Deux cercles de même rayon, symétriques l'un de l'autre -> axe à 45°
    // (remplace la "maison", dont les sommets étaient mal ordonnés).
    // Centres C1(155,105) et C2(245,195), rayon 75. Deux axes valides pour
    // l'ensemble des deux cercles : la médiatrice de [C1C2] (qui échange les
    // deux cercles) ET la droite (C1C2) (qui laisse chaque cercle invariant).
    // Les deux forment un angle de 45° avec l'horizontale. Pas de rotation
    // aléatoire : l'angle cible est volontairement fixé.
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<circle cx="155" cy="105" r="75" fill="#3333ff" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<circle cx="245" cy="195" r="75" fill="#3333ff" fill-opacity="0.08" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<circle cx="155" cy="105" r="3.5" fill="#2E5C8A"/>' +
                '<circle cx="245" cy="195" r="3.5" fill="#2E5C8A"/>' +
             '</svg>',
        valid: [
            { x1: 112, y1: 238, x2: 288, y2: 62 },
            { x1: 115, y1: 65, x2: 285, y2: 235 }
        ],
        explanation: 'Ces deux cercles ont le même rayon : ils sont symétriques l\'un de l\'autre par rapport à la médiatrice du segment qui joint leurs deux centres. La droite qui passe par les deux centres est aussi un axe de symétrie de la figure (chaque cercle est symétrique par rapport à n\'importe lequel de ses diamètres). Dans les deux cas, l\'axe forme un angle de 45° avec l\'horizontale.'
    },

    // 6) Cercle -> n'importe quel diamètre (non concerné par la rotation :
    // un cercle a exactement la même apparence quel que soit l'angle)
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<circle cx="200" cy="140" r="90" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<circle cx="200" cy="140" r="3" fill="#2E5C8A"/>' +
             '</svg>',
        valid: [{ anyAngle: true, cx: 200, cy: 140 }],
        explanation: 'Un cercle possède une infinité d\'axes de symétrie : toute droite qui passe par son centre en est un.'
    },

    // 7) Cœur -> 1 axe vertical (non tourné : figure asymétrique par nature,
    // une rotation aléatoire la rendrait méconnaissable)
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 240, h: 200 },
        svg: '<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M 120,40 C 60,-10 10,60 120,160 C 230,60 180,-10 120,40 Z" fill="#c0392b" fill-opacity="0.15" stroke="#c0392b" stroke-width="2.5"/>' +
             '</svg>',
        valid: [{ x1: 120, y1: 0, x2: 120, y2: 180 }],
        explanation: 'Un cœur symétrique comme celui-ci possède un unique axe de symétrie : la droite verticale qui passe par sa pointe et le creux du haut.'
    },

    // 8) Trapèze isocèle -> rotation FIXE de 90° : force un axe HORIZONTAL
    // (au lieu du vertical habituel), comme demandé.
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="160,80 240,80 300,220 100,220" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: [{ x1: 200, y1: 60, x2: 200, y2: 240 }],
        rotation: 90,
        rotationCenter: { x: 200, y: 150 },
        explanation: 'L\'axe de symétrie d\'un trapèze isocèle passe par les milieux de ses deux bases (ici, la rotation de la figure fait que cet axe est horizontal).'
    },

    // 9) Hexagone régulier -> 6 axes possibles (rotation aléatoire)
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 300, h: 220 },
        svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="220,110 185,49.38 115,49.38 80,110 115,170.62 185,170.62" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: [
            { x1: 220, y1: 110, x2: 80, y2: 110 },
            { x1: 185, y1: 49.38, x2: 115, y2: 170.62 },
            { x1: 115, y1: 49.38, x2: 185, y2: 170.62 },
            { x1: 202.5, y1: 79.69, x2: 97.5, y2: 140.31 },
            { x1: 150, y1: 49.38, x2: 150, y2: 170.62 },
            { x1: 97.5, y1: 79.69, x2: 202.5, y2: 140.31 }
        ],
        rotation: 'random',
        rotationCenter: { x: 150, y: 110 },
        explanation: 'Un hexagone régulier possède six axes de symétrie : trois qui passent par deux sommets opposés, et trois qui passent par les milieux de deux côtés opposés.'
    },

    // 10) Deux triangles symétriques l'un de l'autre -> 1 axe (rotation aléatoire).
    // T1 : (95,101) (305,64) (235,217) ; T2 = image de T1 par la symétrie
    // d'axe y=140 : (95,179) (305,216) (235,63). Vérifié par le calcul :
    // c'est le SEUL axe de symétrie de l'ensemble des deux triangles.
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="95,101 305,64 235,217" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<polygon points="95,179 305,216 235,63" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: [{ x1: 30, y1: 140, x2: 370, y2: 140 }],
        rotation: 'random',
        rotationCenter: { x: 200, y: 140 },
        explanation: 'Ces deux triangles sont symétriques l\'un de l\'autre : l\'axe de symétrie est la médiatrice du segment qui joint un sommet à son image (les trois segments obtenus ont la même médiatrice).'
    },

    // 11) Parallélogramme quelconque -> AUCUN axe (piège, rotation aléatoire
    // pour empêcher de reconnaître "la forme penchée = le piège" par cœur)
    {
        type: 'axis',
        question: '<p>Trace un axe de symétrie de cette figure, s\'il existe.</p>',
        viewBox: { w: 440, h: 340 },
        svg: '<svg viewBox="0 0 440 340" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="70,220 290,220 370,120 150,120" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: [],
        rotation: 'random',
        rotationCenter: { x: 220, y: 170 },
        explanation: 'Un parallélogramme quelconque (ni rectangle, ni losange) n\'a <strong>aucun</strong> axe de symétrie : aucune droite ne le replie exactement sur lui-même. Il possède en revanche un centre de symétrie (voir le quiz sur la symétrie centrale).'
    }
];

// ============================================================
// Quiz de placement — SYMÉTRIE CENTRALE UNIQUEMENT (clé Supabase 508221)
// 10 questions : que des centres à placer (dont deux pièges sans centre).
// Remplace l'ancien QCM "508221" : ici l'élève place lui-même le centre au
// lieu de choisir une réponse dans une liste.
// ============================================================
const placementQuestions_5eme_chapitre08_centrale = [

    // 1) Parallélogramme quelconque -> centre = intersection des diagonales
    // A(90,200) B(230,200) C(310,100) D(170,100) : milieu(A,C) = milieu(B,D) = (200,150)
    {
        type: 'center',
        question: '<p>Ce parallélogramme possède-t-il un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;">' +
                '<polygon points="60,200 280,200 360,100 140,100" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: { x: 210, y: 150 },
        explanation: 'Le centre de symétrie d\'un parallélogramme est le point d\'intersection de ses diagonales : c\'est aussi le milieu de chacune d\'elles.'
    },

    // 2) Rectangle -> centre = intersection des diagonales (= centre du
    // rectangle x:70-330, y:70-210)
    {
        type: 'center',
        question: '<p>Ce rectangle possède-t-il un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="70" y="70" width="260" height="140" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: { x: 200, y: 140 },
        explanation: 'Le centre de symétrie d\'un rectangle est le point d\'intersection de ses diagonales, au centre exact de la figure.'
    },

    // 3) Losange -> centre = intersection des diagonales (200,140)
    {
        type: 'center',
        question: '<p>Ce losange possède-t-il un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="200,60 320,140 200,220 80,140" fill="#8e44ad" fill-opacity="0.1" stroke="#8e44ad" stroke-width="2.5"/>' +
             '</svg>',
        valid: { x: 200, y: 140 },
        explanation: 'Comme tout parallélogramme, un losange possède un centre de symétrie : le point d\'intersection de ses diagonales.'
    },

    // 4) Deux carrés identiques accolés par un côté commun -> centre = milieu de
    // ce côté commun (remplace le carré seul).
    // Carré 1 : x 80..200 ; carré 2 : x 200..320 ; y 80..200 (côté 120).
    // Le côté commun est x=200, y 80..200 : son milieu est (200,140).
    {
        type: 'center',
        question: '<p>Ces deux carrés possèdent-ils un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="80,80 200,80 200,200 80,200" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<polygon points="200,80 320,80 320,200 200,200" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: { x: 200, y: 140 },
        explanation: 'Les deux carrés sont identiques et accolés : chacun est l\'image de l\'autre par un demi-tour autour du <strong>milieu de leur côté commun</strong>. C\'est donc le centre de symétrie de la figure (et non le centre d\'un des deux carrés).'
    },

    // 5) Cercle -> centre (200,140)
    {
        type: 'center',
        question: '<p>Ce cercle possède-t-il un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<circle cx="200" cy="140" r="90" fill="#3333ff" fill-opacity="0.1" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: { x: 200, y: 140 },
        explanation: 'Le centre d\'un cercle est son unique centre de symétrie : toute rotation de 180° autour de ce point superpose le cercle à lui-même.'
    },

    // 6) Deux triangles ayant un sommet commun O, symétriques par rapport à O
    // (remplace l'hexagone) : O(200,140), P(80,90), Q(90,200) et leurs images
    // P'(320,190), Q'(310,80) par la symétrie de centre O (vérifié par le calcul).
    {
        type: 'center',
        question: '<p>Ces deux triangles possèdent-ils un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="200,140 80,90 90,200" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<polygon points="200,140 320,190 310,80" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: { x: 200, y: 140 },
        explanation: 'Les deux triangles sont symétriques l\'un de l\'autre par rapport à leur <strong>sommet commun</strong> : ce point est le milieu de chaque segment qui joint un point d\'un triangle à son image dans l\'autre. C\'est le centre de symétrie de la figure.'
    },

    // 7) Deux triangles symétriques par un point O -> placer O
    // A(80,220) A'(360,80) -> milieu (220,150) ; B(160,220) B'(280,80) -> milieu (220,150) ;
    // C(120,150) C'(320,150) -> milieu (220,150). Vérifié cohérent.
    {
        type: 'center',
        question: '<p>Ces deux triangles $ABC$ et $A\'B\'C\'$ possèdent-ils un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif;">' +
                '<polygon points="80,220 160,220 120,150" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<text x="66" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">A</text>' +
                '<text x="164" y="236" font-size="14" fill="#2E5C8A" font-weight="bold">B</text>' +
                '<text x="112" y="142" font-size="14" fill="#2E5C8A" font-weight="bold">C</text>' +
                '<polygon points="360,80 280,80 320,150" fill="none" stroke="#2E5C8A" stroke-width="2.5"/>' +
                '<text x="366" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">A\'</text>' +
                '<text x="256" y="72" font-size="14" fill="#2E5C8A" font-weight="bold">B\'</text>' +
                '<text x="324" y="166" font-size="14" fill="#2E5C8A" font-weight="bold">C\'</text>' +
             '</svg>',
        valid: { x: 220, y: 150 },
        explanation: 'Le centre $O$ est le milieu de $[AA\']$, de $[BB\']$ et de $[CC\']$ à la fois : c\'est le point autour duquel on fait pivoter $ABC$ d\'un demi-tour pour obtenir $A\'B\'C\'$.'
    },

    // 8) Deux flèches symétriques par un point O -> placer O
    // Première flèche (60,170)-(130,130) ; seconde flèche (260,30)-(190,70) ;
    // milieu(60,260)=(160,100), milieu(170,190)... vérifié : milieu(60,260)=160,
    // milieu(170,30)=100 et milieu(130,190)=160, milieu(130,70)=100 -> (160,100)
    {
        type: 'center',
        question: '<p>Ces deux flèches possèdent-elles un centre de symétrie ?</p>',
        viewBox: { w: 320, h: 200 },
        svg: '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">' +
                '<line x1="60" y1="170" x2="130" y2="130" stroke="#2E5C8A" stroke-width="3"/>' +
                '<polygon points="130,130 112,132 122,148" fill="#2E5C8A"/>' +
                '<line x1="260" y1="30" x2="190" y2="70" stroke="#2E5C8A" stroke-width="3"/>' +
                '<polygon points="190,70 208,68 198,52" fill="#2E5C8A"/>' +
             '</svg>',
        valid: { x: 160, y: 100 },
        explanation: 'Le centre de symétrie doit être le milieu du segment reliant chaque point d\'une flèche à son image sur l\'autre flèche : c\'est bien le cas ici en $(160\\,;100)$ pour les deux extrémités.'
    },

    // 9) Triangle équilatéral -> AUCUN centre (piège classique : un triangle,
    // quel qu'il soit, n'a jamais de centre de symétrie - nombre de côtés impair)
    {
        type: 'center',
        question: '<p>Ce triangle équilatéral possède-t-il un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="200,80 130,201 270,201" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: null,
        explanation: 'Un triangle, même équilatéral, n\'a <strong>jamais</strong> de centre de symétrie : avec un nombre impair de côtés, une rotation de 180° ne peut jamais superposer la figure à elle-même.'
    },

    // 10) Trapèze isocèle (non parallélogramme) -> AUCUN centre (piège :
    // possède un axe, mais pas de centre car ses deux bases n'ont pas la
    // même longueur)
    {
        type: 'center',
        question: '<p>Ce trapèze isocèle possède-t-il un centre de symétrie ?</p>',
        viewBox: { w: 400, h: 280 },
        svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
                '<polygon points="160,80 240,80 300,220 100,220" fill="#3333ff" fill-opacity="0.12" stroke="#2E5C8A" stroke-width="2.5"/>' +
             '</svg>',
        valid: null,
        explanation: 'Un trapèze isocèle qui n\'est pas un parallélogramme possède un axe de symétrie (vertical), mais pas de centre de symétrie : un demi-tour ne le fait jamais coïncider avec lui-même, car sa petite base et sa grande base n\'ont pas la même longueur.'
    }
];
