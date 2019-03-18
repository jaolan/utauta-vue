import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import AlbumList from './components/AlbumList';
import AlbumPage from './components/AlbumPage';
import About from './components/About';

import 'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/Artists', component: ArtistList },
    { path: '/Artists/:ArtistName', component: ArtistPage},
    { path: '/Albums', component: AlbumList },
    { path: '/Albums/:AlbumName', component: AlbumPage},
    { path: '/About', component: About }
  ] 
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
