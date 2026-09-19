// ============================================================
// supabase/functions/manage-student/index.ts
// ============================================================
// Edge Function appelée depuis classes-management.html pour effectuer,
// au nom d'un professeur authentifié, des actions impossibles à faire
// en toute sécurité depuis le navigateur (elles nécessitent la clé
// "service_role", qui ne doit JAMAIS être envoyée au client) :
//
//   - action = "create_student"  : crée le compte Auth + le profil d'un
//                                   nouvel élève, même si les inscriptions
//                                   publiques (index.html) sont désactivées
//                                   dans Authentication > Settings — cette
//                                   action passe par l'API admin, qui
//                                   ignore ce réglage. Email confirmé
//                                   automatiquement (email_confirm: true),
//                                   donc inutile de désactiver "Confirm
//                                   email" au niveau du projet pour que
//                                   ce bouton fonctionne.
//   - action = "set_password"    : change le mot de passe d'un élève
//   - action = "delete_student"  : supprime le compte Auth de l'élève
//                                   (son profil est supprimé en cascade,
//                                   voir "profiles.id ... ON DELETE CASCADE"
//                                   dans supabase_schema.sql)
//
// SÉCURITÉ : la fonction vérifie elle-même, via le token d'autorisation
// envoyé par le navigateur, que l'appelant est un utilisateur connecté
// ET que son profil a le rôle 'teacher'. Sans ça, elle refuse (403).
//
// DÉPLOIEMENT (une seule fois, ou après modification, depuis un terminal
// avec Supabase CLI) :
//   supabase functions deploy manage-student
//
// Aucune variable d'environnement à configurer manuellement : Supabase
// fournit automatiquement SUPABASE_URL, SUPABASE_ANON_KEY et
// SUPABASE_SERVICE_ROLE_KEY à toute Edge Function.
// ============================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL      = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ANON_KEY          = Deno.env.get('SUPABASE_ANON_KEY')!;

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function json(obj: unknown, status = 200) {
    return new Response(JSON.stringify(obj), {
        status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
}

Deno.serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        // ── 1. Vérification de l'appelant (doit être un professeur) ──────
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) return json({ error: 'Non authentifié.' }, 401);

        // Client "au nom de l'appelant" (clé anon + son token) : sert
        // uniquement à vérifier qui il est, pas à faire d'action privilégiée.
        const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
            global: { headers: { Authorization: authHeader } },
        });

        const { data: { user }, error: userError } = await callerClient.auth.getUser();
        if (userError || !user) return json({ error: 'Session invalide.' }, 401);

        const { data: callerProfile, error: profileError } = await callerClient
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single();

        if (profileError || !callerProfile || callerProfile.role !== 'teacher') {
            return json({ error: 'Seul un professeur peut effectuer cette action.' }, 403);
        }

        // ── 2. Lecture de la requête ───────────────────────────────────
        const body = await req.json().catch(() => ({}));
        const { action, studentId, newPassword, email, password, fullName } = body || {};

        // Client "admin" (clé service_role) : jamais exposé au navigateur,
        // n'existe que dans l'environnement d'exécution de cette fonction.
        const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

        // ── 3. Actions disponibles ──────────────────────────────────────

        if (action === 'create_student') {
            if (!email || !password || !fullName) {
                return json({ error: 'email, password et fullName sont requis.' }, 400);
            }
            if (String(password).length < 6) {
                return json({ error: 'Le mot de passe doit faire au moins 6 caractères.' }, 400);
            }

            // email_confirm: true = compte immédiatement utilisable, sans
            // dépendre du réglage "Confirm email" ni d'un email réellement
            // envoyé/reçu. Le trigger handle_new_user() crée le profil
            // automatiquement à partir de raw_user_meta_data, comme pour
            // une inscription normale.
            const { data, error } = await admin.auth.admin.createUser({
                email: String(email),
                password: String(password),
                email_confirm: true,
                user_metadata: { full_name: String(fullName), role: 'student' },
            });

            if (error) return json({ error: error.message }, 400);
            return json({ success: true, userId: data.user?.id });
        }

        // Les actions ci-dessous portent toutes sur un élève existant.
        if (!studentId) return json({ error: 'studentId manquant.' }, 400);

        if (action === 'set_password') {
            if (!newPassword || String(newPassword).length < 6) {
                return json({ error: 'Le mot de passe doit faire au moins 6 caractères.' }, 400);
            }
            const { error } = await admin.auth.admin.updateUserById(studentId, { password: newPassword });
            if (error) return json({ error: error.message }, 400);
            return json({ success: true });
        }

        if (action === 'delete_student') {
            const { error } = await admin.auth.admin.deleteUser(studentId);
            if (error) return json({ error: error.message }, 400);
            return json({ success: true });
        }

        return json({ error: 'Action inconnue.' }, 400);

    } catch (e) {
        return json({ error: (e as Error).message || 'Erreur serveur.' }, 500);
    }
});
