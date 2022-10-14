import { lazy } from 'react';

export const home = [
    {
        path: '/',
        name: 'Home Page',
        Component: lazy(() => import('../modules/features/Home/index')),
    },
    {
        path: '/:location',
        name: 'List Stays Page',
        Component: lazy(() => import('../modules/features/ListRoom/index')),
    },
];
const protectedRoutes = [...home];

export default protectedRoutes;
