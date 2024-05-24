import "./assets/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "@/langs/en.json";
import fr from "@/langs/fr.json";
import { useLang  } from "@/stores/Lang"

const app = createApp(App);
app.use(createPinia());
const storeLang = useLang()
const i18n = createI18n({locale: storeLang.lang, fallbackLocale: "en",messages: {en,fr}});
app.use(i18n);
app.use(router);
app.mount("#app");
