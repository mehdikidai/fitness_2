import { createI18n } from "vue-i18n";
//import ar from "./ar.json";
import en from "./en.json";
import fr from "./fr.json"

const i18n = createI18n({
    locale: "en",
    fallbackLocale: "en",
    messages: {
        en,
        fr
    },
});

export default i18n;
