import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from "./routes";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
Vue.use(VueRouter);

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
  L: L

}).$mount('#app')
