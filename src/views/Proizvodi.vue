<template>

    <div class="bgc">
        <router-link to="/menu" style="text-decoration: none; color:inherit; -webkit-text-stroke: 1px black;"><div class="cat1">Proizvodi</div></router-link>
        <div class="cat1">Galerija</div>
        <div class="cat1">Vinogradi</div>
    </div>

    <div class="bgc2">
    </div>

</template>

<script>

export default({});

</script>

<style scoped>

    .bgc2{
        padding-top: 25vh;
        text-align: center;
        font-size: 10vh;
        position: absolute;
        margin-top: 9vh;
        margin-left: 40vh;
        margin-right: 5vh;
        height: 85vh;
        width: 152vh;
        background-color: rgba(0, 0, 0, 30%);
    }

    .cat1:link{
        text-decoration: none;
    }

    .cat1{
        color: inherit;
        text-decoration: none;
        text-align: center;
        align-content: center;
        height: 10vh;
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .cat1:hover{
        border-style: solid;
        border-left: none;
        border-right: none;
        border-color: black;
        background-color: #bb044b;
    }
    .bgc{
        text-decoration: none;
        border-style: solid;
        border-color: black;
        border-width: 5px;
        margin-top: 9vh;
        margin-left: 5vh;
        width: 30vh;
        font-family: "Lobster";
        position: absolute;
        line-height: 9vh;
        font-size: 5vh;
        font-weight: bold;
        color: ivory;
        -webkit-text-stroke: 1px black;
        background-color: rgba(0, 0, 0, 30%);
    }
</style>