// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Items from './components/Items.vue';
Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      component: Items
    }]
  });
}