import { writable } from 'svelte/store';

// The name of the app
export const appInfo = {
    name: 'Your App Name Here',
    brand: 'Brand Name',
    logo: 'https://flowbite.com/docs/images/logo.svg',
    website: 'http://yourwebsite.com'
};

// The layout for the app ( Sidebar and Header tracking)
export const layout = writable({
    hasHeader: true,
    hasSidebar: true,
    sidebarState: {
        shown: true,
        collapsed: false,
        cta: true,
        cta_data: {
            link: '/newfeature',
            linkText: 'New Feature',
            label: 'New Feature',
            body: 'This is where you could put a CTA of a new feature or something, and pull it from the database to attach to the sidebar cta'
        }
    },
    headerState: {
        showMenuItems: false,
        showDarkMode: false,
        shown: true
    }
});

// Functions for the layout of the app
export const toggleComponent = (component) => {
    layout.update(($layout) => {
        switch (component) {
            case 'header':
                $layout.hasHeader = !$layout.hasHeader;
                break;
            case 'sidebar':
                $layout.hasSidebar = !$layout.hasSidebar;
                break;
            case 'sidebarHide':
                $layout.sidebarState.shown = !$layout.sidebarState.shown;
                break;
            case 'sidebarCollapse':
                $layout.sidebarState.collapsed = !$layout.sidebarState.collapsed;
                break;
            case 'menu':
                $layout.headerState.showMenuItems = !$layout.headerState.showMenuItems;
                break;
            case 'darkModeSwitch':
                $layout.headerState.showDarkMode = !$layout.headerState.showDarkMode;
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