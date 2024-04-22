import { createWebHistory, createRouter } from "vue-router";
// Chung
import LibraLogin from "@/views/LibraLogin.vue";

// User
import LibraUser from "@/views/UserPages/LibraUser.vue";
import LibraMuon from "@/views/UserPages/LibraMuon.vue";

// Admin
import LibraAdmin from "@/views/AdminPages/LibraAdmin.vue";
import LibraAdminBook from "@/views/AdminPages/LibraAdmin.book.vue";
import LibraAddBook from "@/views/AdminPages/LibraAddBook.vue";
import LibraAdminPcomp from "@/views/AdminPages/LibraAdmin.pcomp.vue";
import LibraEditBook from "@/views/AdminPages/LibraEditBook.vue";

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
        // Book
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
    {
        path: "/admin/book/add",
        name: "book.add",
        type: "nhanvien",
        component: LibraAddBook
    },
    {
        path: "/admin/book/:id",
        name: "book.edit",
        type: "nhanvien",
        component: LibraEditBook
    },
        // Publishing Company
    {
        path: "/admin/pcomp",
        name: "pcompadmin",
        type: "nhanvien",
        component: LibraAdminPcomp
    },
    // {
    //     path: "/admin/pcomp/add",
    //     name: "pcomp.add",
    //     type: "nhanvien",
    //     component: LibraAddPcomp
    // },
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