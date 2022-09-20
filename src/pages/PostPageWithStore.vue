<template>
    <div >
        <h2>{{$store.state.isAuth ? "Пользователь авторизован " : "Авторизируйтесь, чтобы использовать сервис"}}</h2>
        <h2>{{$store.getters.doubleLikes}}</h2>
        <div>
            <MyButton @click="$store.commit('incrementLikes')">Like</MyButton>
            <MyButton @click="$store.commit('decrementLikes')">Dislike</MyButton>
        </div>
        <h1> Список постов</h1>
        <MyInput
            v-focus
            v-model="searchQuery"
            placeholder="Поиск....."
        />
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
            :posts="sortedAndSearchedPost"
            @remove="removePost"
            v-if="!isPostLoading"
        />

        <div v-else> Идет загрузка... </div>
        <div v-intersection="loadingMorePosts" class="observer"></div>
       <!--  <div ref="observer" class="observer"></div> -->
        
        <!-- <div class="page_wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                class="page"
                :class="{
                    'current_page': page === pageNumber
                }"
                @click="changePage(pageNumber)"
            >
                {{pageNumber}}
            </div>

        </div> -->
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm.vue"
    import PostList from "@/components/PostList.vue"
    import MyDialog from "@/components/UI/MyDialog.vue";
    import MyButton from "@/components/UI/MyButton.vue";
    import axios from "axios";
    import MySelect from "@/components/UI/MySelect.vue";
    import MyInput from "@/components/UI/MyInput.vue";




    export default {
        components: {
    PostForm,
    PostList,
    MyDialog,
    MyButton,
    MyButton,
    MySelect,
    MyInput,
    MyButton
},
       
        data() {
            return {
                posts: [ ],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
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
            /* changePage (pageNumber) {
                this.page = pageNumber;
            }, */
            async fetchPosts() {
                    try {
                        this.isPostLoading = true;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
                            _page: this.page,
                            _limit: this.limit
                        }});
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
                        this.posts = response.data;
                    } catch (e) {
                        alert("Что то пошло не так...")
                    } finally {
                        this.isPostLoading = false;
                    }
            },
            async loadingMorePosts() {
                    try {
                        this.page += 1;
                        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
                            _page: this.page,
                            _limit: this.limit
                        }});
                        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
                        this.posts = [...this.posts, ...response.data];
                    } catch (e) {
                        alert("Что то пошло не так...")
                    } 
            }
        },

        mounted() {
            this.fetchPosts();
            
          

        },
        computed: {
            sortedPosts() {
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
                )
            },
            sortedAndSearchedPost() {
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        watch: {
           /*  page() {
                this.fetchPosts()
            } */
        }
    } 

</script>

<style>
   

    .app_btns {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    .page_wrapper {
        display: flex;
        justify-content: center;
        margin-top: 20px;

    }
    .page {
        border: 1px solid grey;
        margin: 0 5px;
        padding: 10px;
        color: grey;
        cursor: pointer;
    }
    .current_page {
        border: 2px solid teal;
        color: teal;
        font-weight: 600;
        cursor: pointer;
    }
    .observer {
        height: 30px;
        background: teal;
    }
    

   

</style>