import { writable, get } from 'svelte/store';

// The name of the app
export const appName = 'Your App Name Here';
// The app theme
export const theme = writable({
    colors: {
        header: 'text-gray-900 bg-gray-200',
        theme: 'bg-emerald-900 text-black',
        loginBbackground: 'bg-gray-200',
        mainBackground: 'bg-gray-200',
        sidebar: ''
    },
    dark: false
});

// The layout for the app ( Sidebar and Header tracking)
export const layout = writable({
    hasHeader: true,
    hasSidebar: true,
    sidebarState: {
        shown: true,
        collapsed: false
    },
    headerState: {
        shown: true
    }
});

// The apps navigation menu
export const pages = [{
        title: 'Login',
        link: '/auth/login',
        icon: 'key',
        count: null,
        auth: false,
        hideIfAuth: true
    },
    {
        title: 'Buckets',
        link: '/buckets',
        icon: 'list',
        count: null,
        auth: false,
        hideIfAuth: false
    },
    {
        title: 'Experiments',
        link: '/experiments',
        icon: 'list',
        count: null,
        auth: false,
        hideIfAuth: false
    },
    {
        title: 'Only auth',
        link: '/anotherpage',
        icon: 'user',
        count: 22,
        auth: true,
        hideIfAuth: false
    }
];

// Functions for the layout of the app
export const toggleSidebar = () => {
    layout.update(($layout) => {
        $layout.sidebarState.shown = !$layout.sidebarState.shown;
        return $layout;
    });
};