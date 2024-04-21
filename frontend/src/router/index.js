import { createWebHistory, createRouter } from "vue-router";
// Chung
import LibraLogin from "@/views/LibraLogin.vue";

// User
import LibraUser from "@/views/UserPages/LibraUser.vue";
import LibraMuon from "@/views/UserPages/LibraMuon.vue";

// Admin
import LibraAdmin from "@/views/AdminPages/LibraAdmin.vue";
import LibraAdminBook from "@/views/AdminPages/LibraAdmin.book.vue";

import { type } from "jquery";


const routes = [
    // USER PAGES
    {
        path: "/user",
        name: "indexuser",
        type: "docgia",
        component: LibraUser
    },
    {
        path: "/user/muonsach",
        name: "muonpage",
        type: "docgia",
        component: LibraMuon
    },
    // ADMIN PAGES
    {
        path: "/admin",
        name: "indexadmin",
        type: "nhanvien",
        component: LibraAdmin
    },
    {
        path: "/admin/book",
        name: "bookadmin",
        type: "nhanvien",
        component: LibraAdminBook
    },
    // LOGIN PAGE
    {
        path: "/login",
        name: "loginpage",
        component: LibraLogin
    },
    // ERROR PAGE
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;