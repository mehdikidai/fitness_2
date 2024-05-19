<template>
    <DefaultLayouts>
        <router-view />
    </DefaultLayouts>
</template>

<script>
import DefaultLayouts from "./layouts/DefaultLayouts.vue";
export default {
    components: {
        DefaultLayouts,
    },
};
</script>

<style lang="scss" scoped></style>
