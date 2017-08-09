import routes from './routes';
import VueRouter from 'vue-router';

const baseRoute = '/option/public/';

const router = new VueRouter({
    mode: 'history',
    base: baseRoute,
    routes
});

export default router;