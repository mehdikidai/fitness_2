<template>
    <div class="slider_box">
        <Splide :options="options" :extensions="{ auto }" aria-label="My Favorite Images">

            <SplideSlide v-for="(el,i) in sliderNews" :key="i">
                <h4>{{el}} <span>#</span></h4>
            </SplideSlide>
            
        </Splide>
    </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/vue-splide/css";
import sliderNews from "@/data/slider.json"

export default {
    data() {
        return {
            options: {
                type: "loop",
                rewind: true,
                autoWidth: true,
                height: "40px",
                autoScroll: {
                    speed: 2,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                },
            },
            auto:AutoScroll,
            sliderNews
        };
    },
    components: {
        Splide,
        SplideSlide,
    },
};
</script>

<style lang="scss" scoped>

//@use "./../../scss/color";
.slider_box {
    height: 40px;
    background: #1d1d1d;
    //background: linear-gradient(90deg, rgba(255,121,24,1) 0%, rgba(255,181,24,1) 100%);
    h4 {
        line-height: 40px;
        text-transform: uppercase;
        font-size: 16px;
        color: #000;
        color: white;
        
        span{
            //background: red;
            margin-inline: 10px;
        }
    }
}
</style>
