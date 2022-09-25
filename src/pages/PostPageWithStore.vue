<template>
    <div >
       
        <h1> Список постов</h1>
        <MyInput
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Поиск....."
            v-focus
        /> 
        <div class="app_btns">
            <MyButton
                @click="showDialog"
                
                >
                Создать пост
            </MyButton>
            <MySelect
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
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

    import { mapState, mapGetters, mapActions, mapMutations } from "vuex";


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
                dialogVisible: false,               
            }
        },

        methods: {
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchQuery: 'post/setSearchQuery',
                setSelectedSort: 'post/setSelectedSort'
            }),
            ...mapActions({
                loadingMorePosts: 'post/loadingMorePosts',
                fetchPosts: 'post/fetchPosts'
            }),


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
            
        },

        mounted() {
            this.fetchPosts(); 

        },
        computed: {
            ...mapState({
                posts: state => state.post.posts,
                isPostLoading: state => state.post.isPostLoading,
                selectedSort: state => state.post.selectedSort,
                searchQuery: state => state.post.searchQuery,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPages: state => state.post.totalPages,
                sortOptions: state => state.post.sortOptions,
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts',
                sortedAndSearchedPost: 'post/sortedAndSearchedPost'
            })
           
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