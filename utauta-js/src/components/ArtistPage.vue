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
  </div>
</div>
</div>
</template>


<script>
//TODO: All ArtistList and related should be AlbumList upon completion of testing
import ArtistList from './ArtistList'
import ArtistListItem from './ArtistListItem'
import SearchBar from './SearchBar';

export default {
    components: {
      ArtistListItem, SearchBar,
    },
    methods: {
      getAlbums() {
        // make axios call to get albums from artist
        // get artist id from route
        //log the axios call them impl front
        const id =  this.$route.params.id;
      }
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
