<template>
    <div>
        <form class="d-flex" @submit.prevent="getdata()">
            <input class="form-control me-2" type="text"
                placeholder="Filter by name/username/email/phone/Website/Company Name" v-model="searchQuery"
                aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <br />
        <h5>Total Users : {{ $store.state.UserList.totalRecords }}</h5>
        <table class="table table-bordered">
            <thead class="table-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company Name</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="filteredUsers.length > 0">
                    <tr v-for="user in filteredUsers" :key="user.id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.address.street }}</td>
                        <td>{{ user.phone }}</td>
                        <td>{{ user.website }}</td>
                        <td>{{ user.company.name }}</td>
                    </tr>
                </template>
                <tr v-else style="text-align: center;">
                    <td colspan="8">No Data</td>
                </tr>
            </tbody>
        </table>
        <Pagination v-if="filteredUsers.length > 0" :currentPage="$store.state.UserList.currentPage"
            :records="$store.state.UserList.totalRecords" :perPage="limit" @on-change-handler="changePage" />
    </div>
</template>

<script>
import Pagination from "@/components/pagination/pagination.vue";
import { mapGetters } from 'vuex'
export default {
    name: "UserList",
    components: {
        Pagination
    },
    data() {
        return {
            page: 1,
            limit: 5,
            UpdatedNoticeList: [],
            searchQuery: '',
        };
    },
    computed: {
        filteredUsers() {
            return this.$store.getters['UserList/filteredUsers'];
        },
    },
    mounted() {
        this.$store.dispatch('UserList/fetchUsers');
        setTimeout(() => {
            this.changePage(1);
        }, 1000);
    },

    methods: {
        changePage(value) {
            this.page = value;
            this.$store.dispatch('UserList/setCurrentPage', value);
        },
        getdata() {
            this.$store.dispatch('UserList/searchUsers', this.searchQuery);
        }
    }
};
</script>