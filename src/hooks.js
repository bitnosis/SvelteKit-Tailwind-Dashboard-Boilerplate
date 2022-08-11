import { parseCookie } from '$lib/utils/parseCookie';

export function getSession(event) {
    let cookies = event.request.headers.get('cookie');
    /*let cookies = event.request.headers.get('cookie');
    const theme = parseCookie(cookies).theme ? parseCookie(cookies).theme : 'light';
    const user = parseCookie(cookies).user ? parseCookie(cookies).user : null;
    return {
        user,
        theme
    };*/
    let session = parseCookie(cookies).session;
    if (session == 'undefined') {
        return null;
    }

    return parseCookie(cookies).session ? parseCookie(cookies).session : null;
}
/*
export const handle = async({ event, resolve }) => {
    const cookies = event.request.headers.get('cookie');
    /event.request.locals.user = {
         user: parseCookie(cookies).user ? parseCookie(cookies).user : null,
         authenticated: false
     };

     if (cookies.user) {
         event.request.locals.user.authenticated = false;
     } else {
         event.request.locals.user.authenticated = true;
     }

    const response = await resolve(event.request);
    return {
        ...response
    };
};
*/
/*
export function getSession(event) {
    let cookies = event.request.headers.get('cookie');
    const theme = parseCookie(cookies).theme ? parseCookie(cookies).theme : 'light';
    const user = parseCookie(cookies).user ? parseCookie(cookies).user : null;
    return {
        user,
        theme
    };
}*/