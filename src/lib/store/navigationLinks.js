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
        title: 'Page 1',
        link: '/app/page1',
        icon: 'user',
        count: null,
        auth: true,
        hideIfAuth: false
    },
    {
        title: 'Page 2',
        link: '/app/page2',
        icon: 'list',
        count: null,
        auth: true,
        hideIfAuth: false
    },
    {
        title: 'Page 3',
        link: '/app/page3',
        icon: 'house',
        count: 3,
        auth: true,
        hideIfAuth: false
    }
];