<template>
    <div class="services container">
        <div class="service headline" v-for="item in dataServices" :key="item.id">
            <span class="price_title">{{ item.title }}</span>
            <h4 class="price"> {{ item.price }} <span>Dh</span></h4>
            <ul>
                <li v-for="(el,i) in item.services" :key="i">
                    <i class="material-symbols-outlined">emoji_events</i>{{ el }}
                </li>
               
            </ul>
            <button>Get Started</button>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios';
import { ref,onMounted } from 'vue'


const dataServices = ref([])

onMounted(async ()=>{

    const a = await axios('src/data/services.json')

    a.status === 200 ? dataServices.value = a.data : null


})



</script>

<style lang="scss" scoped>
@use "@/assets/scss/media";
.services {
    height: auto;
    //background: red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 580px;
    gap: var(--space);
    .service {
        background: #0e0e0e;
        display: flex;
        flex-direction: column;
        gap: var(--space);
        padding-inline: calc(var(--space) * 1.5);
        padding-block: calc(var(--space) * 4);
        clip-path: inset(0 0 0 round 6px);
        span.price_title {
            font-size: 20px;
            font-weight: 600;
            color: var(--color-main);
            text-transform: capitalize;
        }
        h4.price {
            font-size: 30px;
            color: #fff;
            span {
                font-size: 16px;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.5);
                font-weight: 300;
            }
        }
        ul {
            flex: 1;
            margin-top: 20px;
            li {
                color: rgba(255, 255, 255, 0.5);
                line-height: 30px;
                display: flex;
                gap: calc(var(--space) * 0.5);
                align-items: center;
                font-size: 14px;
                i {
                    font-size: 14px;
                    transform: translateY(1px);
                    color: rgb(179, 255, 169);
                }
            }
        }
        button {
            border: none;
            background: #fff;
            padding-block: 8px;
            font-size: 14px;
            font-weight: 500;
            width: 120px;
            cursor: pointer;
            color: var(--black);
            clip-path: inset(0 0 0 round 6px);
        }
    }
}
@include media.media(phone) {
    .services {
        grid-template-columns: repeat(auto-fit, minmax(250px, auto));
        grid-template-rows: 1fr 1fr 1fr;
        .service {
            height: 500px;
        }
    }
}
</style>
