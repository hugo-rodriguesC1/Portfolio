import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import WorkView from "../views/WorkView.vue";
import ContactView from "../views/ContactView.vue";
import EcarvtcWorks from "../views/EcarvtcWorks.vue";
import AutofillWorks from "../views/AutofillWork.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/work", name: "Work", component: WorkView },
    { path: "/contact", name: "Contact", component: ContactView },
    { path: "/ecarvtcworks", name: "Ecarvtc", component: EcarvtcWorks },
    { path: "/autofillworks", name: "Autofill", component: AutofillWorks },
    // ici les autre routes
  ],
});

export default router;
