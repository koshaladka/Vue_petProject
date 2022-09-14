<template>
    <div class="app">
        <h1> Список постов</h1>
        <div class="app_btns">
            <MyButton
                @click="showDialog"
                
                >
                Создать пост
            </MyButton>
            <MySelect
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
       
        <MyDialog v-model:show="dialogVisible">
            <PostForm
            @create="createPost"
            />
        </MyDialog>
       
        <PostList 
            :posts="posts"
            @remove="removePost"
            v-if="!isPostLoading"
        />
        <div v-else> Идет загрузка... </div>
      
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm.vue"
    import PostList from "@/components/PostList.vue"
    import MyDialog from "./components/UI/MyDialog.vue";
    import MyButton from "./components/UI/MyButton.vue";
    import axios from "axios";
import MySelect from "./components/UI/MySelect.vue";



    export default {
        components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton,
    MyButton,
    MySelect
},
       
        data() {
            return {
                posts: [ ],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                sortOptions: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержанию'},
                ]    
            }
        },

        methods: {
            createPost (post) {
                this.posts.push(post);
                this.dialogVisible = false;   
            },  
            removePost (post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            },
            showDialog () {
                this.dialogVisible = true;
            },
            async fetchPosts() {
                    try {
                        this.isPostLoading = true;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10') 
                        this.posts = response.data;
                    } catch (e) {
                        alert("Что то пошло не так...")
                    } finally {
                        this.isPostLoading = false;
                    }
            }
        },

        mounted() {
            this.fetchPosts();
        }
    }

</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    .app {
        padding: 20px;
    }

    .app_btns {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    

   

</style>