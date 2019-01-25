import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/router/router';

Vue.use(Router);

export function createRouter() {
   return new Router({
       mode: 'history',
       base: process.env.BASE_URL,
       routes,
   });
}
