
export default {
   getUser(state, users) {
      state.users = users;
   },

   SET_SEARCH_QUERY(state, query) {
      state.searchQuery = query;
      console.log(state.searchQuery);
   },
   SET_FILTERS(state, filters) {
      state.filters = filters;
   },
   SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
   },
}