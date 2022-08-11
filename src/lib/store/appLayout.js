import { writable, get } from 'svelte/store';

// The name of the app
export const appInfo = {
    name: 'Your App Name Here',
    brand: 'Brand Name',
    logo: 'https://flowbite.com/docs/images/logo.svg',
    website: 'http://yourwebsite.com'
};

// The app theme
export const theme = writable({
    colors: {
        theme: 'bg-emerald-900 text-black',
        header: 'text-gray-900 bg-gray-200',
        sidebar: 'text-gray-900 border-r border-gray-300 shadow-md dark:bg-gray-800 dark:text-white  bg-gray-50 ',
        sideBarIcons: 'text-gray-600 dark:text-gray-200',
        loginBbackground: 'bg-gray-200',
        mainBackground: 'bg-gray-200'
    },
    dark: false
});

// The layout for the app ( Sidebar and Header tracking)
export const layout = writable({
    hasHeader: true,
    hasSidebar: true,
    sidebarState: {
        shown: true,
        collapsed: false,
        cta: true,
        cta_data: {
            link: '/experiments',
            linkText: 'New Experiments Feature',
            label: 'New Feature',
            body: 'This is where you could put a CTA of a new feature or something, and pull it from the database to attach to the sidebar cta'
        }
    },
    headerState: {
        shown: true
    }
});

// The apps navigation menu
// The 'count' property on these can be updated, lets say in relation to whatever model/data that page refers to.  To show such things as Inbox count, etc
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
        title: 'Logout',
        link: '/auth/logout',
        icon: 'right-from-bracket',
        count: null,
        auth: true,
        hideIfAuth: false
    }
];

// Functions for the layout of the app
export const toggleComponent = (component) => {
    layout.update(($layout) => {
        switch (component) {
            case 'headerRemove':
                $layout.hasHeader = !$layout.hasHeader;
                break;
            case 'sidebarRemove':
                $layout.hasSidebar = !$layout.hasSidebar;
                break;
            case 'sidebarHide':
                $layout.sidebarState.shown = !$layout.sidebarState.shown;
                break;
            case 'sidebarCollapse':
                $layout.sidebarState.collapsed = !$layout.sidebarState.collapsed;
                break;
        }

        return $layout;
    });
};

export const closeSidebarCTA = () => {
    layout.update(($layout) => {
        $layout.sidebarState.cta = false;
        return $layout;
    });
};

export const setTheme = (isDark) => {
    theme.update(($theme) => {
        $theme.dark = isDark;
        return $theme;
    });
};

export const toggleDarkMode = () => {
    theme.update(($theme) => {
        $theme.dark = !$theme.dark;
        return $theme;
    });
};