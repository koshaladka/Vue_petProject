<template>
    <div class="navbar">
        <div class="logo" @click="$router.push('/')">Vue 3</div>
        <div class="navbar_btns">
            <MyButton @click="$router.push('/posts')">Посты</MyButton>
            <MyButton @click="$router.push('/about')" style="margin-left: 20px" >О проектe</MyButton>
            <MyButton @click="$router.push('/store')" style="margin-left: 20px" >Store</MyButton>
            <MyButton @click="$router.push('/composition')" style="margin-left: 20px" >Composition</MyButton>
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

    .logo {
        cursor: pointer;
        color: teal;
        font-size: 24px;
    }

    

</style>
