import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { TroisJSVuePlugin } from "troisjs";

const app = createApp(App);

app.use(router);
app.use(TroisJSVuePlugin);

app.mount("#app");
