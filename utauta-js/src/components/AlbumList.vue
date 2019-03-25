<template>
<div>
  <SearchBar/>
  <div class="page-header">
  <h1>Albums</h1>
  <small>do you wanna dance with me, tonight?</small>
  </div>
  <div align="center">
  <ul class="list-group col-md-4">
    <AlbumListItem
      v-for="album in albums"
      :album="album"
      :key="album.album_id"
    />
  </ul>
  </div>
</div>
</template>

<script>
import AlbumListItem from './AlbumListItem';
import SearchBar from './SearchBar';
import axios from 'axios';

export default {
    name: 'AlbumList',
    components: {
      AlbumListItem, SearchBar
    },
    data() {
      return {
        albums: [],  
      }
    },
    methods:{//need search endpt
      getAlbums() {
        axios.get('http://localhost:9000/albums')
          .then(response => {
            console.log(response);
            this.albums = response.data;
          });
      }
    },
    created: function() {
      this.getAlbums();
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

