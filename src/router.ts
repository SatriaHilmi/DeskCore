import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import CaseStudy from "./pages/CaseStudy.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/case-study", name: "CaseStudy", component: CaseStudy },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;