# AutoMaths — Projet complet (organisation + auth + gamification)

## ⚠️ Historique des corrections importantes à appliquer

Si votre base Supabase n'est pas à jour, plusieurs correctifs ont été
apportés depuis la version initiale de ce fichier. **Tous les scripts
ci-dessous utilisent `DROP POLICY IF EXISTS` / `CREATE OR REPLACE` /
`IF NOT EXISTS`, donc les rejouer ne duplique rien et ne casse rien.**
Exécutez-les dans l'ordre, dans Supabase Dashboard > SQL Editor :

| # | Script | Corrige |
|---|--------|---------|
| 1 | `supabase_schema.sql` (en entier, une seule fois au départ) | Récursion infinie RLS sur `profiles` (fonctions `is_teacher()` / `my_class_id()`) |
| 2 | `migration_anti_farming_xp.sql` | Élèves qui refaisaient le même QCM en boucle pour gonfler XP/classement |
| 3 | `hotfix_xp_ambiguous_column.sql` | Erreur `42702 column reference "xp_earned" is ambiguous` apparue après le script 2 |
| 4 | `migration_season_leaderboard.sql` | Ajoute le système de "saison" réinitialisable (onglet Saison en cours) |
| 5 | `migration_class_progress.sql` | Ajoute la table utilisée par l'onglet Progression |
| 6 | `hotfix_badges_insert_policy.sql` | **Bug critique** : aucun badge n'a jamais pu s'enregistrer (policy RLS d'INSERT manquante) |
| 7 | `hotfix_security_advisories.sql` | Corrige une partie des alertes de sécurité remontées par Supabase Advisors |
| 8 | `hotfix_chapters_table.sql` | Sécurise la table `public.chapters` (mode "Entraînement", cartes élèves) : lecture/écriture ouvertes aux visiteurs non connectés, aucune traçabilité de l'auteur |
| 9 | `migration_progression_gating.sql` | Ajoute le niveau par classe + le blocage XP/classement pour les QCM hors-programme (élèves qui "grillaient" des chapitres non vus pour gonfler leur classement) |
| 10 | `migration_security_and_badge_fixes.sql` | Anti-triche sur le score brut envoyé à `record_quiz_result()`, `leaderboard_view`/`chapter_progress_view` repassées en SECURITY INVOKER, reset du badge "Sans faute" mal attribué |
| 11 | `migration_leaderboard_function.sql` | **Annule le choix fait en migration 10 pour `leaderboard_view`** : au lieu d'ouvrir la lecture des scores bruts entre élèves, la vue déménage dans un schéma privé (invisible pour l'API) et n'est plus accessible que via la fonction `get_leaderboard()` — ferme l'alerte du linter sans exposer aucune donnée supplémentaire |
| 12 | `migration_student_chapter_scope.sql` | Donne à l'élève le droit de lire `class_progress` pour sa propre classe (nécessaire pour qu'il ne voie que les chapitres cochés par le prof dans "Mes chapitres") |

`supabase_schema.sql` reste le **document de référence à jour** : tous
les correctifs listés ci-dessus y sont déjà intégrés à la fin du fichier
(sections "AJOUT v5" à "AJOUT v8"). Les scripts séparés existent pour
pouvoir appliquer un correctif précis sans tout rejouer.

## Structure

```
automaths/
├── index.html                    ← App principale élève (cours + QCM)
├── student-dashboard.html        ← Tableau de bord gamifié élève (rangs, avatars, badges, leaderboard)
├── dashboard.html                ← Tableau de bord professeur (5 onglets, voir plus bas)
├── classes-management.html       ← Gestion des classes + élèves + leaderboard
├── supabase_schema.sql           ← Schéma SQL complet à jour (à exécuter dans Supabase)
│
├── migration_anti_farming_xp.sql       ← Voir tableau des correctifs ci-dessus
├── hotfix_xp_ambiguous_column.sql      ← idem
├── migration_season_leaderboard.sql    ← idem
├── migration_class_progress.sql        ← idem
├── hotfix_badges_insert_policy.sql     ← idem
├── hotfix_security_advisories.sql      ← idem
│
├── supabase/
│   └── functions/
│       └── manage-student/
│           └── index.ts          ← Edge Function : changer un mot de passe élève / supprimer un élève
│
├── css/
│   ├── styles.css
│   └── equation-balance.css
│
├── js/
│   ├── auth.js                   ← Login/logout Supabase Auth
│   ├── tracker.js                ← Démarre le chrono d'un QCM, délègue à gamification.js
│   ├── gamification.js           ← XP (plafonné anti-farming), rangs, avatars, badges, toasts
│   ├── utils.js                  ← compareAnswers() avec support LaTeX
│   ├── quiz.js                   ← Moteur de quiz (rendu QCM, validation)
│   ├── equation-balance.js       ← Module [[BALANCE:équation]] interactif
│   ├── app.js                    ← Navigation, état, chargement à la demande des chapitres
│   └── charts.js                 ← Histogramme SVG pur (drawAreaHistogram)
│
├── data/
│   ├── officialStructure.js      ← Structure légère (titres seuls) chargée au démarrage
│   ├── localQuestions.js         ← Questions QCM niveau 3ème (clés 31xxx à 34xxx)
│   ├── localQuestions5eme.js     ← Questions QCM niveau 5ème (clés 51xxx à 58xxx)
│   ├── localQuestions4eme.js     ← (à créer — niveau 4ème, pas encore rédigé)
│   ├── localQuestions6eme.js     ← (à créer — niveau 6ème, pas encore rédigé)
│   ├── quizMeta.js               ← Mapping quiz_key→{level, chapter, titre} + comptages — généré automatiquement, voir MAJquizMeta.js
│   ├── MAJquizMeta.js            ← Script Node à lancer après modif d'un fichier localQuestionsXXX.js : régénère quizMeta.js
│   ├── courseOutline.js          ← Vrais titres H2/H3 de chaque chapitre + QCM associés — généré automatiquement, voir MAJcourseOutline.js
│   ├── MAJcourseOutline.js       ← Script Node à lancer après modif d'un fichier officialData_*.js : régénère courseOutline.js
│   ├── chartsData.js             ← Données des graphiques
│   ├── chart.min.js              ← Chart.js (conservé pour futurs graphiques)
│   └── official/
│       ├── officialData_3eme_chapitre1.js   ← Contenu complet chargé à la demande
│       ├── officialData_3eme_chapitre2.js
│       └── ... (30 fichiers au total, 4ème et 3ème)
```

## ⚠️ Étape obligatoire avant de tester

Copiez vos images réelles (logo, schémas) dans le dossier `images/` —
elles n'étaient pas dans le fichier HTML d'origine, seulement leurs chemins.

## Lancer le site en local

```bash
cd automaths
python3 -m http.server 8000
```
Puis ouvrez `http://localhost:8000`.


## 🚀 Mise en place de Supabase (à faire une seule fois)

1. **Exécutez `supabase_schema.sql`** dans Supabase Dashboard > SQL Editor.
   Ce script crée :
   - Les tables `classes`, `profiles`, `quiz_results`, `student_stats`,
     `student_badges`, `teacher_filters`, `app_settings`, `class_progress`
   - Les vues `chapter_progress_view` *(non utilisée actuellement par le
     front-end, conservée telle quelle)*, `leaderboard_view`,
     `dashboard_view`, `best_scores_30d`, `quiz_last_attempt`
   - La fonction sécurisée `record_quiz_result()` (calcule l'XP côté
     serveur, plafonné anti-farming — voir plus bas)
   - La fonction `reset_season()` (réservée aux profs, réinitialise le
     classement sans toucher à l'XP/aux badges/à l'historique)
   - La fonction `apply_inactivity_decay()` (décote d'XP si inactif,
     façon LoL)
   - Toutes les règles de sécurité (RLS)

2. **Créez votre compte professeur** dans Authentication > Users, puis
   passez son `role` à `teacher` dans la table `profiles` (Table Editor).

3. **Déployez l'Edge Function `manage-student`** (nécessaire pour les
   boutons "Changer le mot de passe" / "Supprimer un élève" dans
   `classes-management.html`) :
   ```bash
   npm install -g supabase
   supabase login
   supabase link --project-ref <votre-project-ref>
   supabase functions deploy manage-student
   ```
   Le fichier doit se trouver exactement à
   `automaths/supabase/functions/manage-student/index.ts` (chemin relatif
   à la racine du projet, pas ailleurs) pour que la commande le trouve.
   Aucune clé à configurer manuellement : Supabase fournit automatiquement
   `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY` à la fonction.

4. **Confirmation d'email** : le bouton "Ajouter un élève" de
   `classes-management.html` n'en a **pas besoin** (l'Edge Function
   crée le compte avec `email_confirm: true`, immédiatement utilisable).
   Ce réglage (Authentication → Providers → Email → "Confirm email")
   ne concerne donc plus que l'inscription publique éventuelle depuis
   `index.html` — à activer ou non selon que vous l'utilisez.

5. **Activez la protection contre les mots de passe compromis**
   (recommandé par Supabase Advisors, réglage non disponible en SQL) :
   Authentication → Policies / Auth Settings → activez
   "Leaked password protection".

6. **(Optionnel) Activez la décote automatique d'XP** :
   - Activez l'extension `pg_cron` dans Database > Extensions
   - Exécutez : `SELECT cron.schedule('daily-xp-decay', '0 3 * * *', 'SELECT public.apply_inactivity_decay()');`
   - Sans ça, l'XP ne redescend jamais (juste un peu moins "League of Legends",
     mais le reste du système fonctionne normalement).

7. La table `public.chapters` (mode "Entraînement", cartes créées par les
   élèves, décrite ci-dessous) était mal sécurisée à l'origine — corrigé
   par `hotfix_chapters_table.sql` (déjà intégré à `supabase_schema.sql`,
   section "AJOUT v9").


## 🎮 Comment fonctionne la gamification

### Système de rang (Bronze → Master)
Basé sur l'XP cumulé, avec décote en cas d'inactivité prolongée (façon LoL) :

| Rang     | XP requis |
|----------|-----------|
| Bronze   | 0         |
| Argent   | 150       |
| Or       | 400       |
| Platine  | 800       |
| Diamant  | 1400      |
| Master   | 2200      |

Chaque rang (sauf Master) a 3 sous-paliers (III → II → I).

### Calcul de l'XP — plafonné anti-farming (25 XP / QCM / jour)
Pour éviter qu'un élève ne gonfle artificiellement son XP en refaisant le
même QCM en boucle, l'XP gagnable sur un `(élève, quiz_key, jour)` donné
est **plafonnée à 25**, et directement proportionnelle à la **meilleure**
note obtenue ce jour-là (arrondi au point supérieur) :
```
XP cible = CEIL((score / total) × 25), plafonné à 25
```
Une tentative qui n'améliore pas la meilleure note du jour ne rapporte
aucun XP supplémentaire ; une tentative qui l'améliore ne rapporte que le
complément par rapport à ce qui a déjà été gagné ce jour-là sur ce quiz
précis. Calculé côté serveur dans `record_quiz_result()`.

*(Remplace l'ancienne formule "10 de base + jusqu'à 20 + 15 bonus
sans-faute", qui pouvait être répétée sans limite.)*

### Blocage XP/classement pour les QCM hors-programme
Pour empêcher un élève de gonfler artificiellement son classement en
faisant des QCM de chapitres pas encore vus en classe (ou d'un autre
niveau), deux réglages **combinés**, gérés depuis l'onglet Progression :

1. **Accès par niveau** (`classes.level` / `classes.allowed_levels`) :
   tant qu'aucun niveau n'est défini pour une classe (Gestion des
   classes), aucune restriction. Dès qu'un niveau est choisi,
   `allowed_levels` s'initialise à ce seul niveau — les autres se
   débloquent un par un via les cases "Accès au QCM 6ème/5ème/4ème/3ème"
   en haut de l'onglet Progression.
2. **Progression par chapitre** (table `class_progress`) : tant
   qu'aucune case n'est cochée pour une classe, aucune restriction. Dès
   qu'au moins une case est cochée, tout QCM non coché pour cette classe
   rapporte 0 XP et 0 point de classement.

**Les deux réglages sont donc opt-in, classe par classe** : rien ne
change tant que vous ne touchez pas à l'onglet Progression pour une
classe donnée. Une tentative bloquée reste enregistrée (l'élève voit son
résultat) mais est marquée `counts_for_ranking = false` dans
`quiz_results`, et exclue du calcul de `leaderboard_view`.

⚠️ **Bug corrigé** : `dashboard.html` ne récupérait que `id, name` en
interrogeant `classes` (oubli lors de l'ajout du champ `level`), donc le
niveau paraissait "non défini" dans l'onglet Progression même après
l'avoir réglé dans Gestion des classes. Corrigé (`select('*')`), et les
classes sont maintenant rechargées à chaque ouverture de l'onglet.

### Avatars débloquables par palier
Un renard 🦊 est offert dès le départ. Chaque changement de **rang
principal** (Bronze→Argent, Argent→Or, etc. — pas les sous-paliers I/II/III)
débloque 2 nouvelles icônes au choix (une pensée plutôt "fille", une
plutôt "garçon", mais librement interchangeables). Liste complète et
logique de déblocage dans `AVATAR_TIERS` (`gamification.js` et copie
locale dans `student-dashboard.html`). L'élève change d'avatar en
cliquant sur son icône dans son profil, comme pour le pseudo.

### Badges débloquables
Premier QCM, séries de 3/7/30 jours, QCM rapide (<30s), couche-tard
(après **20h**, pas 21h — pour ne pas encourager les collégiens à se
coucher tard), lève-tôt, "Revanche" (100% après avoir déjà échoué sur ce
même QCM), et une série de badges de maîtrise par chapitre : **Sans
faute** (1 chapitre entier validé à 100%), puis 2, 5, 10 chapitres, et
**Programme maîtrisé** (tous les chapitres au programme). Visibles dans
l'onglet "Mes badges" du tableau de bord élève — un badge non débloqué
affiche une infobulle au survol donnant sa condition de déblocage.

"Chapitre validé à 100%" tient compte de la Progression du prof : si au
moins un QCM est coché pour la classe de l'élève, seuls les QCM cochés
du chapitre comptent (sinon, tous les QCM du chapitre comptent — comme
pour l'XP et le classement, voir plus bas).

Avant tout INSERT, le code vérifie les badges déjà obtenus par l'élève
et ne tente d'insérer que les nouveaux — évite les allers-retours
Supabase inutiles et les erreurs de contrainte UNIQUE en boucle.

⚠️ **Bugs corrigés** :
- Il manquait la policy RLS d'INSERT sur `student_badges`, donc aucun
  badge n'avait jamais pu être réellement enregistré jusque-là (voir
  `hotfix_badges_insert_policy.sql`).
- Le badge "Sans faute" (`perfect_chapter`) se débloquait dès qu'**un
  seul** QCM était réussi à 100%, au lieu de la totalité du chapitre —
  corrigé, et réinitialisé pour tous les élèves qui l'avaient obtenu à
  tort (voir `migration_security_and_badge_fixes.sql`).

### Classement général — plafonné anti-farming (par "saison")
Le classement ne compte, pour chaque `(élève, quiz_key, jour)`, que la
**meilleure tentative de la journée** — refaire le même QCM plusieurs
fois le même jour n'augmente plus le score au-delà de la meilleure note
obtenue (10 à 20 points maximum par QCM et par jour selon sa taille).
Le classement est **global** (toutes classes confondues), visible dans
le profil élève et dans l'onglet "🏆 Saison en cours" du tableau de bord
professeur, où un bouton permet de le réinitialiser (avec confirmation)
sans toucher à l'XP, aux rangs, aux badges ni à l'historique des QCM.
Côté professeur uniquement, chaque ligne affiche aussi le **nom complet**
de l'élève entre parenthèses à côté de son pseudo — jamais affiché côté
élève.

**Accès technique** : ni `index.html`, ni `student-dashboard.html`, ni
`dashboard.html` n'interrogent `leaderboard_view` directement — elle vit
dans un schéma `private` invisible pour l'API REST, et n'est accessible
qu'à travers la fonction `get_leaderboard()` (`sb.rpc('get_leaderboard')`),
pour qu'aucun élève ne puisse lire les scores bruts des autres même en
construisant une requête API à la main (voir
`migration_leaderboard_function.sql`).

### Sécurité anti-triche
Toute la logique d'XP/streak/score/plafond journalier tourne dans la
fonction Postgres `record_quiz_result()` (SECURITY DEFINER). Un élève ne
peut **jamais** modifier son XP, son streak ou ses scores depuis la
console du navigateur : il ne peut qu'appeler cette fonction RPC, qui
recalcule elle-même les valeurs sans jamais faire confiance à ce que le
client envoie.


## 🏫 Gestion des classes (professeur) — `classes-management.html`

- Créer des classes (ex: "3ème A", "3ème B") et les **supprimer**
  (avec confirmation — les élèves repassent automatiquement en "sans
  classe", ils ne sont pas supprimés)
- Choisir le **niveau** de chaque classe (menu déroulant, à la création
  ou modifiable ensuite) — condition pour activer le blocage XP/classement
  par niveau, voir section gamification
- Glisser chaque élève dans la bonne classe (menu déroulant)
- Activer/désactiver le classement (leaderboard) **par classe**
- **Ajouter un élève** directement (crée son compte Supabase Auth + son
  profil) sans passer par la page d'inscription — passe par l'Edge
  Function `manage-student` (action `create_student`), donc fonctionne
  même si les inscriptions publiques d'`index.html` sont désactivées
  (Authentication → Settings → "Allow new users to sign up"), et le
  compte est immédiatement utilisable sans confirmation d'email
- **Changer le mot de passe** d'un élève, ou **le supprimer**
  entièrement (compte + toutes ses données) — ces deux actions passent
  aussi par l'Edge Function `manage-student` (voir mise en place
  ci-dessus), seule façon sécurisée de le faire sans exposer la clé
  service_role au navigateur

Les élèves sans classe assignée ne voient pas de leaderboard "par
classe" (le classement général, lui, reste toujours visible — voir
section gamification).


## 📊 Tableau de bord professeur — `dashboard.html` (5 onglets)

| Onglet | Contenu |
|--------|---------|
| 📊 Suivi statistique | Stats globales + tableau détaillé filtrable (niveau/QCM/période), reprend l'ancien contenu de la page |
| 🗂️ Suivi des QCM | Arborescence Niveau → Chapitre → QCM → Classe façon explorateur de fichiers ; liste des élèves avec pastille de couleur selon leur meilleur score normalisé /20 |
| 🎯 Suivi particulier | Classe → Élève → Chapitre → QCM ; moyenne générale et par chapitre d'un élève donné. La liste des élèves affiche directement, sur chaque bouton, la moyenne générale et les moyennes par **thème** (regroupement d'officialStructure.js au-dessus des chapitres), sans avoir besoin de cliquer pour les voir |
| 🏆 Saison en cours | Classement général (identique à celui du profil élève) + bouton de réinitialisation |
| 📈 Progression | Classe → [Niveau, si la classe n'a pas de niveau fixe] → Chapitre → plan détaillé (fil d'ariane cliquable). Vrais titres H2/H3 quand `data/courseOutline.js` les connaît pour ce chapitre, sinon regroupement provisoire déduit du format numérique des `quiz_key`. Un panneau en haut de page permet d'autoriser/bloquer l'accès aux QCM d'autres niveaux pour la classe. **Effet réel sur le jeu** (contrairement à la version précédente) : voir section dédiée ci-dessous |
| ✏️ Cartes d'entraînement | Liste de toutes les cartes créées par les élèves (`public.chapters`), avec auteur, recherche texte, et suppression (avec confirmation) — modération du mode "Entraînement" |

`data/quizMeta.js` alimente les onglets Suivi des QCM/Particulier/Progression :
régénérez-le avec `node data/MAJquizMeta.js` après avoir modifié un
fichier `localQuestionsXXX.js` (voir commentaires en tête du script).


## ✏️ Mode "Entraînement" — cartes de révision créées par les élèves

Depuis `index.html`, onglet "Entraînement", chaque élève peut créer sa
propre carte de révision (question/réponse, QCM ou question ouverte,
avec un contenu de leçon optionnel) via le bouton "➕ Créer une carte"
(`openCreator()` / `saveNewCard()` dans `js/app.js`). Toutes les cartes
créées sont stockées dans la table `public.chapters` et **partagées
entre tous les élèves** de l'application, peu importe leur classe.

### Sécurité
- Seuls les élèves **connectés** peuvent lire ou créer des cartes
  (avant correctif, n'importe quel visiteur du site, même non connecté,
  pouvait insérer ou lire des cartes directement via l'API Supabase).
- Chaque carte enregistre désormais son auteur (`created_by`), rempli
  **automatiquement** par la session Supabase au moment de l'insertion
  — impossible à falsifier depuis la console du navigateur, même
  principe que pour `record_quiz_result()`. `js/app.js` n'a nécessité
  aucune modification pour ça (`DEFAULT auth.uid()` côté base suffit).
- Un élève peut supprimer sa propre carte directement depuis le mode
  Entraînement (bouton "🗑️ Supprimer ma carte", visible uniquement sur
  ses propres cartes) ; le professeur peut supprimer n'importe quelle
  carte depuis l'onglet **✏️ Cartes d'entraînement** de `dashboard.html`
  (recherche + confirmation avant suppression).

### Limite connue
La colonne `eleve` (`"oui"`/`"non"`) n'a **aucun rapport** avec
l'auteur de la carte malgré son nom — c'est un champ hérité du même
usage que dans `officialStructure.js`. Ne pas confondre avec `created_by`.


## ⚡ Onglet "Automatismes" (index.html) — en construction

Entre "Cours" et "Entraînement", un onglet "Automatismes" est présent
dans l'interface élève mais **ne contient encore aucun contenu** :
cliquer dessus affiche un simple message "En construction" avec un
bouton de retour au mode Cours. Il accueillera à terme des questions
flash de calcul mental correspondant à la partie "Automatismes, sans
calculatrice" du programme officiel — reste entièrement à construire
(pas de table Supabase ni de logique de questions prévue pour l'instant).


## Notes techniques

- **Bug corrigé — "Mes chapitres" (profil élève)** : trois problèmes en
  fait, tous corrigés ensemble.
  1. La barre de progression se basait sur `best_scores_30d` (30 derniers
     jours seulement) — un chapitre validé plus tôt retombait à 0%. Elle
     utilise maintenant l'historique complet des tentatives.
  2. **Tous les chapitres de tous les niveaux s'affichaient**, sans
     filtrer sur le niveau réellement autorisé pour la classe de l'élève
     (`classes.allowed_levels`) ni sur les chapitres effectivement cochés
     dans l'onglet Progression du prof (`class_progress`) — corrigé :
     seuls les chapitres "au programme" apparaissent désormais (si le
     prof en a coché au moins un pour cette classe ; sinon, comportement
     historique inchangé).
  3. **Bug de collision entre niveaux** : le code regroupait les
     tentatives par titre de chapitre seul (`chapter_title`), or certains
     titres se répètent d'un niveau à l'autre (ex: "Transformations").
     Valider un chapitre en 5ème validait donc à tort la progression du
     chapitre de même nom en 4ème/3ème. Corrigé : tout est désormais
     indexé par la paire (niveau, chapitre), jamais le titre seul —
     nécessite que l'élève puisse lire `class_progress` pour sa classe
     (nouvelle policy RLS, voir `migration_student_chapter_scope.sql`).

- Le découpage initial du fichier HTML original a été fait sans
  réécrire la logique existante (chaque fonction déplacée telle quelle).
- `js/quiz.js` contient deux définitions historiques de
  `nextLocalQuestion` et `checkLocalAnswer` (héritées du fichier
  d'origine) ; la seconde écrase la première sans erreur JS, donc
  le comportement est inchangé.
- Le tableau de bord élève (`student-dashboard.html`), la gestion
  des classes (`classes-management.html`) et le tableau de bord
  professeur (`dashboard.html`) sont des pages autonomes : elles
  embarquent leur propre client Supabase et, pour certaines, leur
  propre copie de la logique de rangs/avatars (dupliquée depuis
  `gamification.js`) pour ne dépendre d'aucun autre fichier JS du
  projet, ce qui les rend faciles à déplacer ou tester isolément.
  **Conséquence pratique** : une modification de la logique de rangs ou
  d'avatars dans `gamification.js` doit être répercutée manuellement
  dans la copie locale de `student-dashboard.html` si on veut qu'elle
  s'applique aussi à cette page.


## 🧪 Module "Laboratoire d'Équations" ([[BALANCE:...]])

Permet d'insérer une balance interactive de résolution d'équations
n'importe où dans le contenu des cours (`data/official/*.js`) ou dans une
question de QCM (`localQuestions*.js`), simplement en écrivant un tag
dans le texte :

```
[[BALANCE:x+7=20]]
[[BALANCE:3x-15=15x+30]]
[[BALANCE]]                  <!-- équation générée aléatoirement -->
```

### Fichiers concernés
- `js/equation-balance.js` — le moteur complet, rendu réentrant pour
  supporter plusieurs balances simultanées sur une même page sans
  collision d'ID.
- `css/equation-balance.css` — styles associés, préfixés `.eqbal-*`
  pour ne jamais entrer en conflit avec le reste du site.

### Fonctionnement
1. Le contenu HTML du cours/QCM est injecté normalement (le tag
   `[[BALANCE:...]]` apparaît tel quel, comme du texte brut).
2. Juste après l'injection, `initEquationBalances(container)` est
   appelée (déjà branchée dans `app.js` pour les cours et `quiz.js`
   pour les QCM). Elle scanne le texte, trouve chaque tag, et le
   remplace par une instance interactive complète de la balance.
3. **Avec paramètres** (`[[BALANCE:x+7=20]]`) : l'équation est fixée
   par un petit parseur robuste (gère `x`, `-x`, `3x`, termes constants
   dans n'importe quel ordre, absence de terme d'un côté).
4. **Sans paramètres** (`[[BALANCE]]`) : une équation est générée
   aléatoirement (coefficients entre -9 et 9, coefficients de x
   différents des deux côtés pour garantir une solution unique).
5. Si une question de QCM est *entièrement* composée du tag, la zone de
   réponse classique (input/QCM) est masquée au profit d'un simple
   bouton "Question suivante" : la balance se valide elle-même.


## 📊 Graphiques dans le cours

- **`data/chartsData.js`** — uniquement les **données** de chaque graphique
- **`js/charts.js`** — uniquement la **logique SVG** de construction (une
  fonction `drawXxx()` par graphique + `renderAllCharts()` qui les
  appelle toutes)
- **`data/chart.min.js`** (Chart.js) — conservé pour d'éventuels futurs
  graphiques nécessitant une librairie complète, mais le graphique actuel
  (`drawAreaHistogram`) est en SVG pur, sans dépendance

Dans le cours, un conteneur avec un `<div id="...">` (ou `<canvas>` selon
le type) à un ID unique suffit ; `renderAllCharts()` est appelée
automatiquement à chaque affichage de chapitre et chaque fonction
`drawXxx()` vérifie elle-même la présence de son élément cible avant de
dessiner quoi que ce soit.
