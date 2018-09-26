import Vue from 'vue';
import App from './App.vue';
import {
  createRouter
} from './router.js';
import {
  createStore
} from './store.js';

export function createApp() {
  // create instances
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return {
    app,
    router,
    store
  };
}