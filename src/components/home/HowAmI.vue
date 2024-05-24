<template>
    <div class="how-am-i container">
        <div v-motion-fade-visible class="box">
            <h3>Who's Med Zakc?</h3>
            <p>
                I’m Mohamed zaki, a certified trainer who puts his knowledge and
                experience to help people over 3 years ago to achieve thier
                goals , bulk , lose fat , lean bulk gain muscle. I create
                personalized detailed nutrition and training programs based on
                many informations you share with me. See below for more details.
            </p>
        </div>
        <div v-motion-fade-visible  class="box" ref="PhotoEl" data-tilt>
            <img :src="howAmiPhoto" alt="x" />
        </div>
        <div v-motion-fade-visible class="box">
            <h3>Who's Med Zakc?</h3>
            <!-- <p>
                I’m Mohamed zaki, a certified trainer who puts his knowledge and
                experience to help people over 3 years ago to achieve thier
                goals , bulk , lose fat , lean bulk gain muscle. I create
                personalized detailed nutrition and training programs based on
                many informations you share with me. See below for more details.
            </p> -->
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import howAmiPhoto from "@/assets/images/how-am-i.jpg";
import VanillaTilt from "vanilla-tilt";
import { ref, onMounted } from "vue";

const PhotoEl = ref(null);



onMounted(() => {
    VanillaTilt.init(PhotoEl.value,{max:20,glare:true,"max-glare":0.3});
});

</script>

<style lang="scss" scoped>
@use "@/assets/scss/media";
.how-am-i {
    //height: 200px;
    //background: red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    //grid-template-rows: max-content;
    gap: var(--space);
    .box {
        //height: 550px;
        background: rgb(14, 14, 14);
        clip-path: inset(0 0 0 round 6px);
        &:nth-child(2) {
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &:nth-child(3),
        &:nth-child(1) {
            padding-inline: calc(var(--space) * 1.5);
            padding-block: calc(var(--space) * 3);
            display: flex;
            flex-direction: column;
            gap: calc(var(--space) * 1.5);
            h3 {
                font-size: 25px;
                color: var(--color-main);
            }
            p {
                line-height: 30px;
                color: rgba(255, 255, 255, 0.6);
                font-size: 14px;
            }
            ul {
                li {
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 30px;
                    font-size: 14px;
                    list-style: square;
                    position: relative;
                    left: 12px;
                }
            }
        }
    }
}

@include media.media(phone) {
    .how-am-i {
        //height: 200px;
        //background: red;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: max-content 300px max-content;
        .box {
            //height: 550px;
            &:nth-child(1) {
                //height: calc(100vw - 40px);
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            &:nth-child(2) {
                padding-inline: calc(var(--space) * 1);
                padding-block: calc(var(--space) * 1);
                display: flex;
                flex-direction: column;
                gap: var(--space);
                h3 {
                    font-size: 24px;
                }
                p {
                    font-size: 14px;
                }
                ul {
                    li {
                        line-height: 30px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
