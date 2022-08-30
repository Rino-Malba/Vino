<template>
    <div class="cat1">
        <a href="#">
            {{title}}
        </a>
        <svg viewBox="0 0 1030 638" width="10px">
            <path d="M1017 68L541 626q-11 12-26 12t-26-12L13
            68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
            fill="#fff"></path>
        </svg>
    </div>
</template>

<script>
export default{
    name: 'dropdown',
    props: ['title', 'items']
}
</script>

<style scoped>

.cat1 a{
    width: 10px;
    color: inherit;
    text-decoration: none;
    -webkit-text-stroke: 1px black;
}

</style>