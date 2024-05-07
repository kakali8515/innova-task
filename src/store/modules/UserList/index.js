import actions from "./actions.js"
import mutations from "./mutations.js"

export default {
  namespaced: true,
  state: () => ({
    users: [],
    searchQuery: '',
    filters: {},
    currentPage: 1,
    itemsPerPage: 5,
    totalRecords: 0
  }),

  mutations: mutations,
  actions: actions,
  getters: {
    filteredUsers: (state) => {
      let filteredUsers = state.users;

      // Apply search query filter
      if (state.searchQuery) {
        filteredUsers = filteredUsers.filter(user => {

          const users = user.name.toLowerCase();
          const username = user.username.toLowerCase();
          const email = user.email.toLowerCase();
          const phone = user.phone.toLowerCase();
          const website = user.website.toLowerCase();
          const address = user.address.street.toLowerCase();
          const company = user.company.name.toLowerCase();

          const searchTerm = state.searchQuery.toLowerCase();

          return users.includes(searchTerm) || username.includes(searchTerm) || email.includes(searchTerm)
            || phone.includes(searchTerm) || website.includes(searchTerm) || address.includes(searchTerm) || company.includes(searchTerm);
        });
        state.totalRecords = filteredUsers.length;
      } else {
        state.totalRecords = state.users.length;
      }

      // Pagination
      const startIndex = (state.currentPage - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      return filteredUsers.slice(startIndex, endIndex);
    }
  }
}