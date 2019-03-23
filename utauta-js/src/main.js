import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import AlbumList from './components/AlbumList';
import AlbumPage from './components/AlbumPage';
import About from './components/About';
import HomePage from './components/HomePage';

import 'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, App},
    { path: '/artists/', component: ArtistList },
    { path: '/artist/:id', component: ArtistPage, name: "artist"},
    { path: '/albums', component: AlbumList },
    { path: '/albums/:AlbumName', component: AlbumPage},
    { path: '/about', component: About }
  ] 
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
