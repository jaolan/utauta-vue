<template>
<div>
<SearchBar/>
<div class="page-header">
  <a href=#><img class="mr-3" src="http://kiokunokiroku.jp/artist/img/artist/000190/artist.jpg" height="300" width="300"/></a>
  <h1>Artist Name Here</h1>
  </div>
<div class="discography">
  <h2>Discography</h2>
  <div align="center">
    <ul class="list-group col-md-4">
    <AlbumListItem
      v-for="album in albums"
      :album="album"
      :key="album.album_id"
    /></ul>
  </div>
</div>
</div>
</template>


<script>
//TODO: All ArtistList and related should be AlbumList upon completion of testing
import ArtistList from './ArtistList'
import ArtistListItem from './ArtistListItem';
import AlbumListItem from './AlbumListItem';
import SearchBar from './SearchBar';
import axios from 'axios';

export default {
    components: {
      ArtistListItem, SearchBar, AlbumListItem
    },
    data() {
      return {
        albums: [],  
      }
    },
    methods: {
      getAlbums() {
        // make axios call to get albums from artist
        // get artist id from route
        // use id in axios call
        //log the axios call them impl front
        
        axios.get('http://localhost:9000/albums')
          .then(response => {
            console.log(response);
            this.albums = response.data;
          });
      }
    },
    created: function() {
        const id =  this.$route.params.id;
        this.getAlbums();
    }
}
</script>

<style scoped>
.discography{
  padding-top: 30px;
}

.mr-3{
border: 10px solid #c73e67;

}
</style>
