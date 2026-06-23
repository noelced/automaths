// ============================================================
// auth.js — Module d'authentification AutoMaths
// Dépendance : Supabase JS v2 (chargé dans index.html)
// ============================================================

// ⚠️ REMPLACEZ CES DEUX VALEURS par celles de votre projet Supabase
//    Dashboard Supabase > Settings > API
const SUPABASE_URL  = 'https://ppedtegkqcklkleeghbc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwZWR0ZWdrcWNrbGtsZWVnaGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxMTMxMjQsImV4cCI6MjA5NTY4OTEyNH0.WFbk-EdrbN5vtZJzjO3dcK2BkpASti00Fn5KZDwWZxc';

// Client Supabase (singleton partagé avec tracker.js et dashboard.js)
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// État courant de l'utilisateur (accessible globalement)
let currentUser    = null;   // objet auth.users de Supabase
let currentProfile = null;   // objet de la table profiles


// ============================================================
// INITIALISATION : appelée au chargement de la page
// ============================================================
async function initAuth() {
    // 1. Récupère la session active (si l'élève était déjà connecté)
    const { data: { session } } = await supabaseClient.auth.getSession();

    if (session?.user) {
        await onLoginSuccess(session.user);
    } else {
        showLoginScreen();
    }

    // 2. Écoute les changements de session (login / logout / expiration)
    supabaseClient.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user) {
            await onLoginSuccess(session.user);
        } else {
            currentUser    = null;
            currentProfile = null;
            showLoginScreen();
        }
    });
}


// ============================================================
// LOGIN
// ============================================================
async function login() {
    const email    = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    const errorEl  = document.getElementById('auth-error');

    errorEl.textContent = '';

    if (!email || !password) {
        errorEl.textContent = 'Merci de remplir tous les champs.';
        return;
    }

    // Désactive le bouton pendant la requête
    const btn = document.getElementById('btn-login');
    btn.disabled = true;
    btn.textContent = 'Connexion…';

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    btn.disabled = false;
    btn.textContent = 'Se connecter';

    if (error) {
        // Message d'erreur simplifié pour les élèves
        errorEl.textContent = 'Email ou mot de passe incorrect.';
        return;
    }

    await onLoginSuccess(data.user);
}


// ============================================================
// INSCRIPTION (pour les élèves — appelée par le professeur
// ou accessible via un lien dédié)
// ============================================================
async function register() {
    const email     = document.getElementById('reg-email').value.trim();
    const password  = document.getElementById('reg-password').value;
    const fullName  = document.getElementById('reg-name').value.trim();
    const className = document.getElementById('reg-class').value.trim();
    const errorEl   = document.getElementById('reg-error');

    errorEl.textContent = '';

    if (!email || !password || !fullName) {
        errorEl.textContent = 'Merci de remplir tous les champs obligatoires.';
        return;
    }
    if (password.length < 6) {
        errorEl.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        return;
    }

    const btn = document.getElementById('btn-register');
    btn.disabled = true;
    btn.textContent = 'Inscription…';

    const { error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name:  fullName,
                class_name: className,
                role:       'student'   // toujours 'student' via ce formulaire
            }
        }
    });

    btn.disabled = false;
    btn.textContent = "S'inscrire";

    if (error) {
        errorEl.textContent = error.message;
        return;
    }

    // Affiche un message de confirmation
    document.getElementById('reg-success').style.display = 'block';
}


// ============================================================
// LOGOUT
// ============================================================
async function logout() {
    await supabaseClient.auth.signOut();
    // onAuthStateChange s'en charge : showLoginScreen() sera appelé
}


// ============================================================
// AFTER LOGIN : charge le profil et redirige
// ============================================================
async function onLoginSuccess(user) {
    currentUser = user;

    // Charge le profil (rôle, nom, classe)
    const { data: profile, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    if (error || !profile) {
        console.error('Profil introuvable :', error);
        showLoginScreen('Profil introuvable. Contactez votre professeur.');
        return;
    }

    currentProfile = profile;

    // Un professeur est normalement redirigé vers son tableau de bord.
    // Exception : s'il accède à index.html via le bouton "Accès aux cours"
    // (lien avec ?presenter=1), on le laisse sur la page de cours pour
    // qu'il puisse projeter le contenu en classe devant les élèves.
    const isPresenterMode = new URLSearchParams(window.location.search).has('presenter');

    if (profile.role === 'teacher' && !isPresenterMode) {
        // Redirige vers le tableau de bord professeur
        window.location.href = 'dashboard.html';
    } else {
        // Affiche l'application (cours/entraînement) — élève, ou professeur en mode présentation
        hideLoginScreen();
        updateHeaderUI();
    }
}


// ============================================================
// UI HELPERS
// ============================================================
function showLoginScreen(message = '') {
    document.getElementById('auth-screen').style.display  = 'flex';
    document.getElementById('app-content').style.display  = 'none';
    if (message) {
        document.getElementById('auth-error').textContent = message;
    }
}

function hideLoginScreen() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
}

function updateHeaderUI() {
    const el = document.getElementById('user-info-header');
    if (!el || !currentProfile) return;

    if (currentProfile.role === 'teacher') {
        // Mode présentation : affiche un badge clair plutôt que le nom générique
        // (qui peut valoir 'Élève' par défaut pour les comptes profs créés
        // directement depuis le dashboard Supabase), + un retour rapide.
        el.innerHTML = `
            <span style="font-size:0.8rem; font-weight:700; color:var(--primary, #2563eb);
                background:#eef2ff; padding:3px 10px; border-radius:20px;">
                🎓 Mode présentation
            </span>
            <a href="dashboard.html" style="
                margin-left:10px; font-size:0.8rem; color:var(--text-muted);
                text-decoration:none; border:1px solid #e2e8f0; border-radius:6px;
                padding:4px 10px;">
                ← Tableau de bord
            </a>
        `;
        return;
    }

    el.innerHTML = `
        <span style="font-size:0.85rem; color:var(--text-muted);">
            👤 ${currentProfile.full_name}
            ${currentProfile.class_name ? `· ${currentProfile.class_name}` : ''}
        </span>
        <button onclick="logout()" style="
            margin-left:10px; background:none; border:1px solid #e2e8f0;
            border-radius:6px; padding:4px 10px; font-size:0.8rem;
            cursor:pointer; color:var(--text-muted);">
            Déconnexion
        </button>
    `;

    // Affiche le bouton "Mon profil" (tableau de bord gamifié) pour les élèves uniquement
    const profileBtn = document.getElementById('btn-my-profile');
    if (profileBtn) {
        profileBtn.style.display = 'inline-flex';
    }
}

function toggleAuthForm() {
    const loginForm    = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    loginForm.style.display    = loginForm.style.display    === 'none' ? 'block' : 'none';
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
}
