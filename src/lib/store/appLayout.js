import { writable } from 'svelte/store';

// The name of the app
export const appInfo = {
    name: 'SvelteKit Admin',
    brand: 'SKAdmin',
    logo: 'https://flowbite.com/docs/images/logo.svg',
    website: '/'
};

// The layout for the app ( Sidebar and Header tracking)
export const layout = writable({
    hasHeader: true,
    hasSidebar: true,
    sidebarState: {
        shown: true,
        collapsed: false,
        autoCollapse: true,
        cta: true,
        cta_data: {
            link: '/newfeature',
            linkText: 'New Feature',
            label: 'New Feature',
            body: 'This is where you could put a CTA of a new feature or something, and pull it from the database to attach to the sidebar cta'
        }
    },
    headerState: {
        dropdownMenuOpen: false,
        showMenuItems: false,
        showDarkMode: true,
        shown: true,
        height: 'h-8'
    }
});

// Functions for the layout of the app
export const toggleComponent = (component) => {
    layout.update(($layout) => {
        switch (component) {
            case 'dropdownMenu':
                $layout.headerState.dropdownMenuOpen = !$layout.headerState.dropdownMenuOpen;
                break;
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
            case 'headerHeight':
                $layout.headerState.height === 'h-16' ?
                    ($layout.headerState.height = 'h-8') :
                    ($layout.headerState.height = 'h-16');
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

export const onKeyDown = (event) => {
    event.preventDefault();
    if (event.metaKey || event.ctrlKey) {
        switch (event.key.toLowerCase()) {
            case 'a':
                toggleComponent('sidebar');
                break;
            case 'f':
                toggleComponent('sidebarCollapse');
                break;
            case 'h':
                toggleComponent('header');
                break;
        }
    }
};