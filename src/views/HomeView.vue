<template>
    <CoverVue/>
    <SliderVue/>
    <Space/>
    <TitVue text="how am i"/>
    <HowAmI/>
    <Space/>
    
</template>

<script>
import CoverVue from "@/components/home/Cover.vue";
import SpaceVue from "@/components/Space.vue";
import TitVue from "@/components/Tit.vue";
import HowAmI from '@/components/home/HowAmI.vue';
import Space from "@/components/Space.vue";

export default {
  components:{
    CoverVue,
    SpaceVue,
    TitVue,
    HowAmI,
    Space
  }
};
</script>

<style lang="scss" scoped></style>
