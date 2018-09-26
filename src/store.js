import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      items: [],
      serverMessage: ''
    },
    actions: {
      fetchItems({
        commit
      }) {
        return axios.get('https://reqres.in/api/users')
          .then(response => {
            commit('setServerMessage', 'myServerMessage');
            commit('setItems', response.data.data);
          });
      }
    },
    mutations: {
      setItems(state, items) {
        state.items = items;
      },
      setServerMessage(state, serverMessage) {
        state.serverMessage = serverMessage;
      }
    }
  })
}