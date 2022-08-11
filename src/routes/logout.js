import { supabase } from '$lib/api/supabaseClient';

export async function get() {
    //const { error } = await supabase.auth.signOut();
    return {
        status: 302,
        headers: {
            location: '/',
            'set-cookie': `session=; path=/; expires=0;`
        }
    };
    /*
    if (error) {
        return {
            status: error.status,
            body: error.message
        };
    }

    return {
        status: 302,
        headers: {
            location: '/',
            'set-cookie': `session=; path=/; expires=0;`
        }
    };*/
}