<template>
    <li class="list-group-item-media" >
        <a href="/artists/name-placeholder"><img class="mr-3" src="http://kiokunokiroku.jp/artist/img/artist/000190/artist.jpg" height="100" width="100"/></a>
        <div class="media-body">
            Artist Title Here
            <div>
            <small>description goes right here in this box. I am writing alot here to see how far this box will wrap around for this entry.</small>
            </div>
        </div>

    </li>  
</template>

<script>
export default {
//URLS ARE API, HOSTED, endpt
//artistlist will be intgrated w/ artistlistitems.
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