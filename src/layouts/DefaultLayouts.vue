<template>
    <NavBarVue />
    <MainVue>
        <slot />
    </MainVue>
    <FooterVue />
</template>

<script>
import NavBarVue from "@/components/Nav.vue";
import FooterVue from "@/components/Footer.vue";
import MainVue from "@/components/Main.vue";

export default {
    components: {
        NavBarVue,
        FooterVue,
        MainVue
    },
};
</script>

<style lang="scss" scoped></style>
