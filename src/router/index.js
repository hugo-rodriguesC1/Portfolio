import { createRouter, createWebHistory } from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import WorkView from "../views/WorkView.vue";
import ContactView from "../views/ContactView.vue";
import EcarvtcWork from "../views/EcarvtcWork.vue";
import AutofillWork from "../views/AutofillWork.vue";
import BlendupWork from "../views/BlendupWork.vue";
import Dl44Work from "../views/Dl44Work.vue";
import DatavizWork from "../views/DatavizWork.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Accueil", component: AccueilView },
    { path: "/work", name: "Work", component: WorkView },
    { path: "/contact", name: "Contact", component: ContactView },
    { path: "/ecarvtcwork", name: "Ecarvtc", component: EcarvtcWork },
    { path: "/autofillwork", name: "Autofill", component: AutofillWork },
    { path: "/blendupwork", name: "Blendup", component: BlendupWork },
    { path: "/dl44work", name: "Dl44", component: Dl44Work },
    { path: "/datavizwork", name: "Dataviz", component: DatavizWork },
    // ici les autre routes
  ],
});

export default router;
