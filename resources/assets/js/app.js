
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', require('./App.vue'));
Vue.component('op-header', require('./components/Header.vue'));
Vue.component('op-navigation', require('./components/Navigation.vue'));

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import 'animate.css/animate.min.css';

Vue.use(ElementUI);

const app = new Vue({
    el: '#app'
});
