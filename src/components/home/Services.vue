<template>
    <div class="services container">
        <div class="service" v-for="item in [1, 2, 3]" :key="item">
            <span class="price_title">one month</span>
            <h4 class="price">2000 <span>Dh</span></h4>
            <ul>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i>meal
                    plan specialized
                </li>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i>workout
                    plan
                </li>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i>Cardio
                </li>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i
                    >supplements plan
                </li>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i>every
                    two weeks checks
                </li>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i
                    >questions every two weeks
                </li>
                <li>
                    <i class="material-symbols-outlined">emoji_events</i
                    >hormonal cycles with details
                </li>
            </ul>
            <button>Get Started</button>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/scss/media";
.services {
    height: auto;
    //background: red;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 550px;
    gap: var(--space);
    .service {
        background: #0e0e0e;
        display: flex;
        flex-direction: column;
        gap: var(--space);
        padding-inline: var(--space);
        padding-block: calc(var(--space) * 3);
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
                color: #fff;
                line-height: 30px;
                display: flex;
                gap: calc(var(--space) * 0.5);
                align-items: center;
                font-size: 14px;
                i {
                    font-size: 16px;
                    transform: translateY(1px);
                    color: rgba(255, 255, 255, 0.5);
                }
            }
        }
        button {
            border: none;
            background: #fff;
            padding-block: 10px;
            font-size: 14px;
            font-weight: 500;
            width: 140px;
            cursor: pointer;
            color: var(--black);
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
