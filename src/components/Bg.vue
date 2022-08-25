<template>
    <body>
        <div class="container">
            <img src="../assets/bg.png" alt="">
        </div>
    </body>
</template>

<script>
export default{};
</script>

<style scoped>

 body{
        display: block;
        margin: 0;
        z-index: 3;
    }
    .container{
        background: no-repeat center center fixed; 
        background-size: 100% auto;
        max-height: 100%;
        max-width: 100%;
        top: 0;
        margin: 0;
        width: 100vh;
        height: 50vh;
        padding-left: calc(var(--bs-gutter-x) * 0);
    }

</style>