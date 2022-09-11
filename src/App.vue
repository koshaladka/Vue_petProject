<template>
    <div class="app">
        <PostForm/>
        <PostList :posts="posts"/>
        
      
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm.vue"
    import PostList from "@/components/PostList.vue"


    export default {
        components: {
            PostForm, PostList
    },
       
    data() {
        return {
            posts: [
                {id: 1, title: 'Javascript', body: 'Описание поста'},
                {id: 2, title: 'Javascript', body: 'Описание поста 2'},
                {id: 3, title: 'Javascript', body: 'Описание поста 3'},
                {id: 4, title: 'Javascript', body: 'Описание поста 4'},
            ],
            title: '',
            body: '',
        }
},

        methods: {
            createPost () {
                const newPost = {
                    id: Date.now(),
                    title: this.title,
                    body: this.body,
                }
                this.posts.push(newPost);
                this.title = '';
                this.body = '';
            },

            
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