
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "UserList",
            component: () => import("@/view/UserList.vue"),
        },
        {
            path: "/form",
            name: "FormInput",
            component: () => import("@/view/FormValidation.vue"),
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});


export default router;
