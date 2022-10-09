import { lazy } from 'react';

export const home = [
    {
        path: '/',
        name: 'Home Page',
        Component: lazy(() => import('../modules/features/Home/index')),
    },
];
const protectedRoutes = [...home];

export default protectedRoutes;
