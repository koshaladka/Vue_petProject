<template>
    <div>
        <h1>Добро пожаловть на проект Vue3 "Posts"</h1>
        <ul>В проекте реализовано: </ul>
            <li>Подгрузка постов с https://jsonplaceholder.typicode.com/ AXIOS</li>
            <li>Cоздание поста в моальном окне, удаление поста</li>
            <li>Сортировка и фильтрация</li>
            <li>Бесконечная лента - подгрузка постов</li>
            <li>Vue Router</li>
            <li>VUEX на отдельной странице Store</li>
            <li>Создание собственных директив</li>
            <li>Использование Mixins</li>
            <li>Анимация transition group</li>
            <li>Composition API</li>

        <div class="links">
            <router-link class="link" to="/posts">Список постов</router-link>
            <br>
            <router-link class="link" to="/about">О проекте</router-link>
            <br>
            <router-link class="link" to="/store">Store - Vuex</router-link>
            <br>
            <router-link class="link" to="/composition">Composition API</router-link>
        </div>
    </div>
</template>

<script></script>

<style scope>
    h1 {
        margin-top: 100px;
        color: teal;
        font-size: 40px;

    }

    ul {
        margin-top: 50px;
        font-size: 20px;
    }

    li {
        font-size: 20px;
    }

    .link {
        font-size: 30px;
    } 

    .links {
        margin-top: 50px;
        display: flex;
        flex-direction: column;   
    }

</style>

