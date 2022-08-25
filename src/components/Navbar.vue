<template>
    <nav class="nav">
    <div class="d-flex flex-row">
      <div class="container-fluid" style="display:inline-block">
        <a class="navbar-brand" href="#">
        <img id="img" src="../assets/logo.png" alt="">
        </a>
    </div>    
        <div class="navtxt d-flex flex-row">
        <router-link to="/" class="nav-link" id="links">Home</router-link>
        <router-link to="/about" class="nav-link" id="links">O nama</router-link>
        <router-link to="/cart" class="nav-link" id="links">Košarica</router-link>
        <router-link to="/login" class="nav-link" id="links">Login</router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

    @font-face {
        font-family: 'Pacifico';
        src: url(@/assets/fonts/Pacifico.ttf);
    }

    @font-face {
        font-family: "Lobster";
        src: url(@/assets/fonts/Lobster\ 1.4.ttf);
    }

    nav{
         position: fixed;
         top: 0;
         background: #5e983a;
         height: 50px;
         width: 100%;
         font-size: x-large;
         font-weight:lighter;

        .navtxt{
            font-family: 'Times New Roman', Times, serif;
            position: fixed;
            right: 0;
            margin-top: -2px;
        }

        #img{
            float: left;
            left: 0;
            width: 150px; 
            height: 50px;
        
        }
    }

    #links{
        color: ivory;
        font-family: "Lobster";

    }

    #links:hover{
        background-color: #bb044b;        
    }

</style>
