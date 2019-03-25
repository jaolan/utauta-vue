<template>
     <li @click="onAlbumSelect" class="list-group-item-media" >
        <img class="mr-3" :src="album.Picture" height="100" width="100"/>
        <div class="media-body">
            {{ album.name }}
            <div>
            <small>{{ album.description }}</small>
            </div>
        </div>

    </li>
</template>

<script>
export default {
    name: "AlbumListItem",
    props: ['album'],
//URLS ARE API, HOSTED, endpt
//albumlist will be intgrated w/ albumlistitems.
    methods: {
        onAlbumSelect(){
            this.$router.push({ name: 'album', params: { id: this.album.album_id } })
        }
    },
    mounted: function() {
        console.log("album: ", this.album)
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
        align-content: center;
        width: 100%;
        border-right: 3px solid #c73e67;
        border-left: 3px solid #c73e67;
        border-top: 3px solid #c73e67;
        color: aliceblue;
    }

    li:nth-last-child(1){
    border-bottom: 3px solid #c73e67;
    }

    li:hover {
        width: 100%;
        background-color: rgb(88, 87, 87);
    }
    .list-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }

</style>
