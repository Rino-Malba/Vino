<template>
    <nav class="nav">
    <div class="d-flex flex-row">
      <div class="container-fluid" style="display:inline-block">
        <a class="navbar-brand" href="#">
        <router-link to="/"><img id="img" src="../assets/logo.png" alt=""></router-link>
        </a>
    </div>    
        <div class="navtxt d-flex flex-row">
        <router-link to="/" class="nav-link" id="links">Home</router-link>
        <router-link to="/about" class="nav-link" id="links">Info</router-link>
        <router-link to="/login" class="nav-link" id="links">Login</router-link>
        <router-link to="/cart" class="nav-link" id="links"><img src="@/assets/carticon.png" class="img2"></router-link>
        </div>
      </div>
    </nav>
</template>

<script>
export default {};


</script>

<style lang="scss">

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
         background: linear-gradient(90deg, rgba(94,152,58,1) 29%, rgba(139,181,113,1) 73%, rgba(139,181,113, 0.6) 100%);
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

    .img2{
        margin-top: -0.1vh;
        width: 3vh;
        filter: invert(1);
    }

    #links{
        color: ivory;
        font-family: "Lobster";

    }

    #links:hover{
        background-color: #bb044b;        
    }

</style>
