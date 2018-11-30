import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';

import * as getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: false,  // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app
  },
  state: {
    isAuthCompleted : false,
    test:'hello from index.js',
    markers: [{
        position: {
          lat: 23.838733,
          lng: 90.505829
        }
      },
      {
        position: {
          lat: 24.043177,
          lng: 91.015026
        }
      },
      {
        position: {
          lat: 23.890211,
          lng: 90.332650
        }
      }, {
        position: {
          lat: 23.190211,
          lng: 90.132650
        }
      }, {
        position: {
          lat: 24.890211,
          lng: 90.432650
        }
      }, {
        position: {
          lat: 23.890211,
          lng: 90.332650
        }
      }, {
        position: {
          lat: 21.890211,
          lng: 90.232650
        }
      }
    ]
  },
  mutations: {}
})

export default store