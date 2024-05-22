import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useUser = defineStore("user", () => {
    const user = ref({
        email:"mehdi@gmail.com",
        token:"123456789"
    })

    const isLogin = computed(()=>{
        return false
    })

    return { user,isLogin }
});
