<template>
    <CoverVue/>
    <SliderHome/>
    <Space/>
    <TitVue text="how am i"/>
    <Space/>
    <HowAmI/>
    <Space/>
    <TitVue text="Transformations"/>
    <Space/>
    <PhotosHome/>
    <Space/>
    <TitVue text="Pro coaching services"/>
    <Space/>
    <ServicesHome/>
    <Space/>
    <TitVue text="Youtube"/>
    <Space/>
    
</template>

<script>
import CoverVue from "@/components/home/Cover.vue";
import SpaceVue from "@/components/Space.vue";
import TitVue from "@/components/Tit.vue";
import HowAmI from '@/components/home/HowAmI.vue';
import Space from "@/components/Space.vue";
import SliderHome from "@/components/home/Slider.vue";
import PhotosHome from '@/components/home/Photos.vue';
import ServicesHome from "@/components/home/Services.vue";

export default {
  components:{
    CoverVue,
    SpaceVue,
    TitVue,
    HowAmI,
    Space,
    SliderHome,
    PhotosHome,
    ServicesHome
  }
};
</script>

<style lang="scss" scoped></style>
