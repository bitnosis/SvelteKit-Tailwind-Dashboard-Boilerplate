import { parseCookie } from '$lib/utils/parseCookie';

export async function handle({ event, resolve }) {
    return resolve(event, { ssr: false });
}

export const getSession = async(event) => {
    let cookies = event.request.headers.get('cookie');
    const user = parseCookie(cookies).user ? parseCookie(cookies).user : null;
    const theme = parseCookie(cookies).theme ? parseCookie(cookies).theme : 'light';

    return (event.locals.user = {
        user: user,
        theme: theme
    });
};