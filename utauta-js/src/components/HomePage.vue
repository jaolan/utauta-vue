<template>
<div>
    <FeaturedAlbum></FeaturedAlbum>
    <SearchBar/>
</div>
</template>

<script>
import FeaturedAlbum from './FeaturedAlbum.vue';
import SearchBar from './SearchBar.vue'

export default {
    name: 'HomePage',
    components: {
        FeaturedAlbum, SearchBar
    },

}
</script>

<style scoped>

</style>
