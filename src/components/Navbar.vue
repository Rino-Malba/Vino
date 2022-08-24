<template>
    <nav class="nav">
    <div class="d-flex flex-row">
      <div class="container-fluid" style="display:inline-block">
        <a class="navbar-brand" href="#">
        <img id="img" src="../assets/logo.png" alt="">
        </a>
    </div>    
        <div class="navtxt d-flex flex-row">
        <a class="nav-link active" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" href="#">Disabled</a>
        </div>
      </div>
    </nav>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

    nav{
         position: fixed;
         top: 0;
         background: #5e983a;
         height: 50px;
         width: 100%;

        .navtxt{
            position: fixed;
            right: 0;
            margin-top: 5px;
        }

        #img{
            float: left;
            left: 0;
            width: 150px; 
            height: 50px;
        
        }
    }



</style>
