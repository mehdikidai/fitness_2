<template>
    <header>
        <nav class="container">
            <router-link to="/" class="logo">LOGO</router-link>
            <div class="ul_box">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/services">services</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/contact">{{
                    $t("message.hello")
                }}</router-link>

                <select v-model="$i18n.locale" @change="changerLang">
                    <option
                        v-for="locale in $i18n.availableLocales"
                        :key="`locale-${locale}`"
                        :value="locale"
                    >
                        {{ locale }}
                    </option>
                </select>
            </div>
        </nav>
    </header>
</template>

<script setup>


const changerLang = (e) => {
   
    console.log(e.target.value)
   
}

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
