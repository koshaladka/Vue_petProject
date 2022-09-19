<template>
    <div class="navbar">
        <div>Vue 3</div>
        <div class="navbar_btns">
            <MyButton>Посты</MyButton>
            <MyButton>О проектe</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from "./MyButton.vue";

</script>

<style scoped>

    .navbar {
        height: 50px;
        background-color: teal;
        box-shadow: 2px 2px 4px gray;
        display: flex;
    }

</style>
