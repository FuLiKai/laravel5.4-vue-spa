import Login from '../../pages/Login';
import Frame from '../../pages/Frame';
import childRoutes from './frame.js';

const routes = [
    {
        path:  '/login',
        component: Login
    },
    {
        path: '/',
        component: Frame,
        children: [
            ...childRoutes
        ]
    }
];

export default routes;