import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CartView from "../views/CartView.vue";
import AccountView from "../views/AccountView";
import Category from "../views/Category";
import Product from "../views/Product";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/cart",
        name: "cart",
        component: CartView,
    },
    {
        path: "/account",
        name: "account",
        component: AccountView,
    },
    {
        path: "/categories/:id",
        name: "category",
        component: Category,
    },
    {   path: "/product/:id", 
        name: "product", 
        component: Product,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
