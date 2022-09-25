<template>
    <div>
      <h1>Страница с постами</h1>
      <my-input
        v-model="searchQuery"
        placeholder="Поиск...."
        v-focus
      />
      <div class="app__btns">
        <my-button
        >
          Создать пользователя
        </my-button>
        <my-select
          v-model="selectedSort"
          :options="sortOptions"
        />
      </div>
      <my-dialog v-model:show="dialogVisible">
        <post-form
        />
      </my-dialog>
      <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
      />
      <div v-else>Идет загрузка...</div>
    </div>
  </template>
  
  <script>
  import PostForm from "@/components/PostForm";
  import PostList from "@/components/PostList";
  import MyButton from "@/components/UI/MyButton";
  import axios from 'axios';
  import MySelect from "@/components/UI/MySelect";
  import MyInput from "@/components/UI/MyInput";
  import {ref} from 'vue'
  import {usePosts} from "@/hooks/usePosts";
  import useSortedPosts from "@/hooks/useSortedPosts";
  import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";
  export default {
    components: {
      MyInput,
      MySelect,
      MyButton,
      PostList, PostForm
    },
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
      }
    },
    setup(props) {
      const {posts, totalPages, isPostsLoading} = usePosts(10);
      const {sortedPosts, selectedSort} = useSortedPosts(posts);
      const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
      return {
        posts,
        totalPages,
        isPostsLoading,
        sortedPosts,
        selectedSort,
        searchQuery,
        sortedAndSearchedPosts,
      }
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