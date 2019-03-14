<template>
  <div id="app">
    <nav-bar/>
    <a href=#><img style="padding-top: 30px;" src="https://img.discogs.com/AkOrci0VGW4EyocudygYkGQC0iI=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4777778-1465593637-3821.png.jpg" height="300" width="300"></a>
    <SearchBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import ArtistList from './components/ArtistList';
import ArtistPage from './components/ArtistPage';
import AlbumList from './components/AlbumList';
import AlbumPage from './components/AlbumPage';
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    SearchBar,

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
