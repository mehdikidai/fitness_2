import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useUser } from "@/stores/user";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../views/AboutView.vue"),
        },
        {
            path: "/services",
            name: "services",
            component: () => import("../views/ServicesView.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: "/contact",
            name: "contact",
            component: () => import("../views/ContactView.vue"),
            meta: { requiresAuth: true },
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue"),
        },
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: () => import("../views/NotFoundView.vue"),
        },
    ],
});

router.beforeEach((to, from, next) => {
    try {
        const store = useUser();

        if (to.meta.requiresAuth && !store.isLogin) {
            next({ name: "login" });
        } else if (to.name === "login" && store.isLogin) {
            next({ name: "home" });
        } else {
            next();
        }
    } catch (error) {
        console.error("error:", error);
        next(false);
    }
});

export default router;
