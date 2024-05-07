import axios from 'axios';
export default {

    async fetchUsers({ commit }) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            commit('getUser', response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    },

    searchUsers({ commit }, query) {
        commit('SET_SEARCH_QUERY', query);
        commit('SET_CURRENT_PAGE', 1);
    },

    applyFilters({ commit }, filters) {
        commit('SET_FILTERS', filters);
        commit('SET_CURRENT_PAGE', 1);
    },
    setCurrentPage({ commit }, page) {
        commit('SET_CURRENT_PAGE', page);
    },


}