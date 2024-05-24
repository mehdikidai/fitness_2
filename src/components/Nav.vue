<template>
    <header>
        <nav class="container">
            <router-link to="/" class="logo">LOGO</router-link>
            <div class="ul_box">

                <router-link to="/">{{ $t('home') }}</router-link>
                <router-link to="/about">{{ $t('about') }}</router-link>
                <router-link to="/services">{{ $t('services') }}</router-link>
                <router-link to="/contact">{{ $t('contact') }}</router-link>
                

            
                <div class="langBox">
                    <button class="lang" @click="showLang">
                        <i class="material-symbols-outlined">translate</i>
                    </button>
                    <ul class="lang_ul" v-if="langUl" ref="langBox">

                        <li v-for="locale in $i18n.availableLocales" :key="locale" >
                            <button v-if="locale !== $i18n.locale" @click="$i18n.locale = locale;h(locale)" ><img :src="flag(locale)" />{{ locale.toLocaleUpperCase() }}</button>
                        </li>
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>

import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'


const langUl = ref(false)
const langBox = ref(null)

onClickOutside(langBox,()=>langUl.value = false)

const showLang = () =>  langUl.value = !langUl.value

const h = (l) => {
    langUl.value = false
    localStorage.setItem("lang", l)
}


const flag = (f) => {
    switch (f) {
        case "ar":
            return `https://flagsapi.com/MA/flat/16.png`;
        case "fr":
            return `https://flagsapi.com/FR/flat/16.png`;
        case "en":
            return `https://flagsapi.com/GB/flat/16.png`;
        default:
            return `https://flagsapi.com/GB/flat/16.png`;
    }
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/media";

header {
    height: 70px;
    //background: var(--color-background);
    position: fixed;
    inset: 0;
    z-index: 90;
    background: rgba(9, 7, 7, 0.7);
    backdrop-filter: blur(10px);
    nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
            color: #fff;
            font-size: 24px;
            text-transform: uppercase;
            font-weight: 600;
        }
        .ul_box {
            display: flex;
            gap: calc(var(--space) * 2.5);
            a {
                color: #fff;
                text-transform: capitalize;
                &.router-link-active {
                    color: #0a80d9;
                }
            }
            .langBox {
                position: relative;
                z-index: 99;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                button.lang {
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    i{
                        font-size: 18px;
                        color: #fff;
                    }
                }
                .lang_ul {
                    position: absolute;
                    width: 60px;
                    background: #0e0e0e;
                    right: 0;
                    top: 30px;
                    padding-inline: 8px;
                    li {
                        height: 33px;
                        display: flex;
                        align-items: center;
                        color: #fff;
                        font-size: 14px;
                        &:empty{
                            display: none;
                        }
                        button {
                            width: 100%;
                            height: 100%;
                            background: transparent;
                            border: none;
                            display: flex;
                            align-items: center;
                            gap: 6px;
                            line-height: 33px;
                            color: #fff;
                            font-size: 12px;
                            cursor: pointer;
                        
                        }
                    }
                }
                
            }
        }
    }
}

@include media.media(phone) {
    header {
        nav {
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .logo {
                color: #fff;
                font-size: 22px;
                text-transform: uppercase;
                font-weight: 600;
            }
            .ul_box {
                position: fixed;
                height: 100vh;
                top: 0;
                left: -70vw;
                width: 70vw;
                z-index: 99;
                background: var(--color-background);
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-inline: var(--space);
                &.active {
                    left: 0;
                }
                a {
                    color: #fff;
                    font-size: 22px;
                    &.router-link-active {
                        color: #0a80d9;
                    }
                }
            }
        }
    }
}
</style>
