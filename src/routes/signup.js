import { supabase } from '$lib/api/supabaseClient';

export async function post(event) {
    const data = await event.request.formData();
    const d = [...data];
    // NO IDEA WHY I HAD TO DO THIS.....
    let theEmail = d[0][1];
    let thePassword = d[1][1];
    // when normailly I could just do....
    // let email = request.body.get('email');
    // But SvelteKit failed me here.

    const loginData = {
        email: theEmail,
        password: thePassword
    };

    const { session, error } = await supabase.auth.signUp(loginData);

    if (error) {
        return {
            status: error.status,
            body: error.message
        };
    }

    return {
        status: 200,
        body: 'success',
        headers: {
            'set-cookie': `session=${
				session?.user?.email
			}; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=${new Date(
				session?.expires_at * 1000
			).toUTCString()}`
        }
    };
}