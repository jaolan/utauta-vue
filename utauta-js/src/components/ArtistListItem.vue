<template>
    <li @click="onArtistSelect" class="list-group-item-media" >
        <img class="mr-3" :src="artist.Picture" height="100" width="100"/>
        <div class="media-body">
            {{ artist.name }}
            <div>
            <small>{{ artist.description }}</small>
            </div>
        </div>

    </li>  
</template>

<script>
export default {
    name: "ArtistListItem",
    props: ['artist'],
//URLS ARE API, HOSTED, endpt
//artistlist will be intgrated w/ artistlistitems.
    methods: {
        onArtistSelect(){
            this.$router.push({ name: 'artist', params: { id: this.artist.artist_id } })
        }
    },
    mounted: function() {
        console.log("artist: ", this.artist)
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