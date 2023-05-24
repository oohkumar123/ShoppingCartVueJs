import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AccountView from "../views/AccountView";
import CategoryView from "../views/CategoryView";
import ProductView from "../views/ProductView";
import CartView from "../views/CartView.vue";
import CheckoutView from "../views/CheckoutView";
import SaleCompleteView from "../views/SaleCompleteView";
import NotFound from "../views/NotFound";

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
        path: "/account",
        name: "account",
        component: AccountView,
    },
    {
        path: "/categories/:id",
        name: "category",
        component: CategoryView,
        props: true
    },
    {   path: "/product/:id", 
        name: "product", 
        component: ProductView,
        props: true
    },
    {  
        path: "/cart/", 
        name: "cart", 
        component: CartView,
        props: true
    },
    {  
        path: "/checkout/", 
        name: "checkout", 
        component: CheckoutView,
        props: true
    },
    {  
        path: "/salecomplete/:order_id?", 
        name: "salecomplete", 
        component: SaleCompleteView,
        props: true
    },
    {  
        path: "/:pathMatch(.*)", 
        component: NotFound,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
