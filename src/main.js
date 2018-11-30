import Vue from 'vue'
import App from './App.vue'
import store  from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { index } from './components/index';


// Form Wizard
import VueFormWizard from 'vue-form-wizard'
Vue.use(VueFormWizard)

//Vuetify
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css' 

//google maps
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps,{
  load:{
    key:"AIzaSyBNAqPrTQoz9P4NBlDDyfxrnKiafkaL8iQ"
  }
})

// Table
import Vuetable from 'vuetable-2'
Vue.use(Vuetable)

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    mode: 'hash'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App }
})
