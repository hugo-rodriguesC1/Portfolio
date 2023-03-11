import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import WorkView from "../views/WorkView.vue";
import ContactView from "../views/ContactView.vue";
import EcarvtcWork from "../views/EcarvtcWork.vue";
import AutofillWork from "../views/AutofillWork.vue";
import BlendupWork from "../views/BlendupWork.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/work", name: "Work", component: WorkView },
    { path: "/contact", name: "Contact", component: ContactView },
    { path: "/ecarvtcwork", name: "Ecarvtc", component: EcarvtcWork },
    { path: "/autofillwork", name: "Autofill", component: AutofillWork },
    { path: "/blendupwork", name: "Blendup", component: BlendupWork },
    // ici les autre routes
  ],
});

export default router;
