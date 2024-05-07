
import { createStore } from 'vuex';
import UserList from './modules/UserList';

export default createStore({
    state: {
        status: 'vuex is working',
    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        UserList
    }
})