<template>
    <div class="app">
        <MyDialog :show="true">
            <PostForm
            @create="createPost"
            />
        </MyDialog>
       
        <PostList 
            :posts="posts"
            @remove="removePost"
        />
        
      
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm.vue"
    import PostList from "@/components/PostList.vue"
import MyDialog from "./components/UI/MyDialog.vue";


    export default {
        components: {
    PostForm,
    PostList,
    MyDialog
},
       
    data() {
        return {
            posts: [
                {id: 1, title: 'Javascript', body: 'Описание поста'},
                {id: 2, title: 'Javascript', body: 'Описание поста 2'},
                {id: 3, title: 'Javascript', body: 'Описание поста 3'},
                {id: 4, title: 'Javascript', body: 'Описание поста 4'},
            ],
           
        }
},

        methods: {
            createPost (post) {
                this.posts.push(post);    
            },  
            removePost (post) {
                this.posts = this.posts.filter(p => p.id !== post.id)
            }
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

    

   

</style>