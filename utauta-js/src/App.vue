<template>
  <div id="app">
    <nav-bar/>
    <FeaturedAlbum></FeaturedAlbum>
    <SearchBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import AlbumList from './components/AlbumList';
import AlbumPage from './components/AlbumPage';
import FeaturedAlbum from './components/FeaturedAlbum';
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'

import axios from 'axios'

export default {
  name: 'app',
  components: {
    NavBar,
    SearchBar,
    FeaturedAlbum,
  },
  data() {
    return {
      artists: [],  
    }
  },
  methods:{//need search endpt
    getArtists() {
      axios.get('http://localhost:9000/artists')
        .then(response => {
          console.log(response);
          this.artists = response.data;
        });
    }
  },
  created: function() {
    this.getArtists();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: aliceblue;
}

</style>
