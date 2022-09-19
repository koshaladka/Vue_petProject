<template>
    <div>
        <h1>Добро пожаловть на страницу с постами</h1>
        <ul>Вы можете: </ul>
            <li>фильтровать посты</li>
            <li>производить поиск</li>
            <li>добавлять и удалять посты</li>
    <router-link class="link" to="/posts">Список постов</router-link>
    <br>
    <router-link class="link" to="/about">О проекте</router-link>
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
        margin-top: 200px;
        font-size: 30px;
    } 

</style>

