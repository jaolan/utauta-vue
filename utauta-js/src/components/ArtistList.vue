<template>
<div>
  <SearchBar/>
  <div class="page-header">
  <h1>Artists</h1>
  <small>do you wanna dance with me, tonight?</small>
  </div>
  <div align="center">
  <ul class="list-group col-md-4">
    <ArtistListItem
      v-for="artist in artists"
      :artist="artist"
      :key="artist.artist_id"
    />
  </ul>
  </div>
</div>

</template>

<script>
import ArtistListItem from './ArtistListItem';
import SearchBar from './SearchBar';
import axios from 'axios';

export default {
    name: 'ArtistList',
    components: {
      ArtistListItem, SearchBar
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

<style scoped>
.page-header{
  padding-bottom: 20px;
}
.list-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }

</style>
