<template>
    <form @submit.prevent>
            <h4 class="title">Создание поста</h4>
            <MyInput 
                v-focus
                v-model="post.title"
                type="text" 
                placeholder="Название"/>
            <MyInput 
                v-model="post.body" 
                type="text" 
                placeholder="Описание"/>
            <MyButton 
                @click="createPost"
                class="btn_style">
                Создать
            </MyButton>

        </form>
</template>


<script>
import MyInput from './UI/MyInput.vue';

    export default {
    data() {
        return {
            post: {
                title: "",
                body: ""
            }
        };
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: ""
            };
        }
    },
    components: { MyInput }
}

</script>



<style>
     .title {
        font-size: 20px;
        color: teal;
        font-weight: 600;
    }

    form {
        display: flex;
        flex-direction: column;

    }
   
    .btn_style {
        align-self: flex-end;
        margin-top: 15px;
    }
</style>