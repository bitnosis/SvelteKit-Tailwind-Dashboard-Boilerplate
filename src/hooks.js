import { parseCookie } from '$lib/utils/parseCookie';

export const getSession = async(event) => {
    let cookies = event.request.headers.get('cookie');
    const user = parseCookie(cookies).user ? parseCookie(cookies).user : null;
    const theme = parseCookie(cookies).theme ? parseCookie(cookies).theme : 'light';

    return (event.locals.user = {
        user: user,
        theme: theme
    });
};