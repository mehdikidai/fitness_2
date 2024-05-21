import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
    const count = ref(100);
    const name = ref("footer");
    const add = (n) => {
      count.value = count.value + n
    }
    const test  = computed(()=>{
      return count.value * 2
    })
    return { count, name,add,test };
});
