<template>
<div>
  <div class="page-header">
  <h1>Artists</h1>
  <small>do you wanna dance with me, tonight?</small>
  </div>
  <div align="center">
  <ul class="list-group col-md-4">
    <ArtistListItem>item</ArtistListItem>
    <ArtistListItem>item</ArtistListItem>
    <ArtistListItem>item</ArtistListItem>
  </ul>
  </div>
</div>

</template>

<script>
import ArtistListItem from './ArtistListItem'
export default {
    name: 'ArtistList',
    components: {
      ArtistListItem
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
