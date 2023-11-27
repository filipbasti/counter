import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// Import the CSS or use your own!
import "@programic/vue3-tooltip/dist/index.css";
createApp(App).use(router).mount("#app");
