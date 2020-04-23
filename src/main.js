import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from "./routes";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import VueAxios from "vue-axios";
import store from "./store"
import VueMq from "vue-mq"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../src/assets/pin_icon.png'),
  iconUrl: require('../src/assets/pin_icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
Vue.use(VueRouter, VueAxios, axios);

Vue.use(VueMq, {
  breakpoints: {
      mobile: 600,
      tablet: 900,
      desktop: 1024,

  }
});

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({

  render: h => h(App),
  router: router,
  L: L,
  store

}).$mount('#app')
