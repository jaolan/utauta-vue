<template>
    <div class="header">
        <h2>Get your groove on.</h2>
        <input
            @input="onInput"
            class="search-bar"
            placeholder="Search"
        />
    </div>
    
</template>

<script>
export default {
    name: 'SearchBar'
}
</script>

<style scoped>

    .search-bar{
        text-align: left;
        width: 75%;
        padding: 10px 20px;
        border-radius: 12px;
        border: 1px solid rgb(179, 179, 179);
        margin-top: 20px;
    }

    .header{
        text-align: center;
        margin: 20px;
        margin-top: 50px;
        color: aliceblue

    }
</style>
