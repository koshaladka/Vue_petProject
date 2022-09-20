export const postModule = {
    state: () => ({
        posts: [ ],
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
    }),
    getters: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSearchQuery(state, searchQuery) {
            state.page = searchQuery;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
    },
    mutations: {

    },
    actions: {

    }
}