<template>
<div>
<SearchBar/>
<div class="page-header">
  <a href=#><img class="mr-3" src="http://kiokunokiroku.jp/artist/img/artist/000190/artist.jpg" height="300" width="300"/></a>
  <h1>Artist Name Here</h1>
  <small>A little information about the artist, maybe json data.</small>
  </div>
<div class="discography">
  <h2>Discography</h2>
  <div align="center">
  <ul class="list-group col-md-4">
    <ArtistListItem>item</ArtistListItem>
    <ArtistListItem>item</ArtistListItem>
    <ArtistListItem>item</ArtistListItem>
  </ul>
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
