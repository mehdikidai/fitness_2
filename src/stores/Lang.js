import { defineStore } from "pinia";
import { ref } from "vue";

export const useLang = defineStore("lang", () => {

    const lang = ref(localStorage.getItem("lang") || "en");

    function changeLang(l){
        lang.value = l
    }

    return { lang, changeLang };
});
