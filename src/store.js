import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      items: []
    },
    actions: {
      fetchItems(context) {
        const items = [{
          name: 'test1',
          name: 'test2'
        }];
        context.commit('setItems', items);
      }
    },
    mutations: {
      setItems(state, items) {
        Vue.set(state.items, items);
      }
    }
  })
}