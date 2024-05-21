<template>
    <div class="modal" v-if="open" @click="hiddenModel">
        <slot />
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["Hidden"]);

const hiddenModel = (e) => e.target.className === "modal" ? emit('Hidden') : null

</script>

<style lang="scss" scoped>
.modal {
    width: 100%;
    height: 100dvh;
    z-index: 9999;
    background: transparent;
    backdrop-filter: blur(5px);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.9s linear;
}
</style>
