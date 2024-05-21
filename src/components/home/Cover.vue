<template>
    <div class="cover">
        <div class="content container">
            <span>Biozakcteam</span>
            <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos itaque dicta eos repellat totam porro cupiditate
                maiores odio odit architecto.
            </p>
            <router-link to="/contact">Contact</router-link>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

@use '@/assets/scss/media';

.cover {
    height: 650px;
    //background: red;
    background-image:linear-gradient(to right, #00000000, black), url("@/assets/images/bgCover.jpg");

    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center,center;
    position: relative;
    //background-attachment: fixed;
    // &::before{
    //     content: "";
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     inset: 0;
    //     background: rgba(0, 0, 0, 0.8);
    // }
    //clip-path: polygon(0 0,100% 0,100% calc(100% - 100px),50% 100%,0 calc(100% - 100px));
    .content {
        //background: red;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: calc(var(--space) * 1);
        padding-inline: 10rem;
        span{
            color: var(--color-main);
            font-size: 40px;
            text-transform: capitalize;
            font-weight: 600;
            font-family: "Shadows Into Light", cursive;
        }
        h1 {
            text-align: center;
            font-size: 60px;
            font-weight: 900;
            color: #fff;
            text-transform: uppercase;
        }
        p {
            text-align: center;
            color: #fff;
            line-height: 30px;
        }
        a{
            background: var(--color-main);
            padding: 10px 26px;
            color: #fff;
            clip-path: inset(0 0 0 round 6px);
        }
    }
}

@include media.media(phone) {
    .cover{
        //display: none;
        .content{
            padding-inline: var(--space);
            h1{
                font-size: 30px;
            }
        }
    }
     
}
</style>
