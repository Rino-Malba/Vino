<template>
<SignUp/>
<img class="logo" src="../assets/logo.png">
<header>
<h1>Sign up</h1>
</header>
<div>
    <input type="text" placeholder="Enter Name" />
    <input type="text" placeholder="Enter Email" />
    <input type="text" placeholder="Enter Password" />
    <button>Sign Up</button>
</div>
</template>


<script>
export default {
    name: "SignUp",
}
</script>

<style>
.logo{
    width: 100px;
}
</style>