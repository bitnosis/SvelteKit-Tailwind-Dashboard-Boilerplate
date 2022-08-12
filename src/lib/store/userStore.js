import { writable } from 'svelte/store';
import Cookies from 'js-cookie';
import { browser } from '$app/env';

export const user = writable({ user: null, theme: null });

// Store updaters
export const updateUser = (theSessionUser) => {
    user.set({ user: theSessionUser.user, theme: theSessionUser.theme });
    setTheme(theSessionUser.theme);
};

export const setTheme = (theme = null) => {
    user.update(($user) => {
        // Set the theme based on the cookie
        if (Cookies.get('theme') && theme === null) {
            theme = Cookies.get('theme');
        }
        $user.theme = theme;
        if (browser) {
            if (Cookies.get('theme')) {
                setCookie('theme', theme);
            }
            // Set the theme onto the body
            if (theme == 'dark') {
                document.body.classList.add(theme);
            } else {
                document.body.classList.remove('dark');
            }
        }

        return $user;
    });
};

// Authentication - Login / Logout and Cookies
export const loginUser = (newUser) => {
    user.set({ user: newUser.id, theme: 'light' });
    newUser.user === null ? removeCookie('user') : setCookie('user', newUser.id);
    if (!Cookies.get('theme')) {
        setCookie('theme', 'light');
    }
};

export const logoutUser = async() => {
    await removeCookie('user');
    user.set({ user: null, theme: 'light' });
    if (browser) {
        window.location.replace('/');
    }
};

// Cookie set and remove functions
export const setCookie = async(key, value) => {
    await Cookies.set(key, value, { expires: 7 });
};

export const removeCookie = async(key) => {
    if (browser) {
        await Cookies.remove(key, { path: '/' });
    }
};