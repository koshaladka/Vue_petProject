<template>
    <div class="navbar">
        <div>Vue 3</div>
        <div class="navbar_btns">
            <MyButton>Посты</MyButton>
            <MyButton style="margin-left: 20px">О проектe</MyButton>
        </div>
    </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
        name: 'Navbar'
    }

</script>

<style>

    .navbar {
        height: 50px;
        background-color: lightgray;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }

    .navbar_btns {
        margin-left: auto;
    }

    

</style>
