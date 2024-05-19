<template>
    <div class="tit">
        <div class="container">
            <h2>{{ text }}</h2>
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: String,
    },
};
</script>

<style lang="scss" scoped>
.tit {
    height: 160px;
    //background: rgb(20, 56, 255);

    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
        position: relative;
        h2 {
            color: #fff;
            font-size: 33px;
            z-index: 1;
            text-transform: uppercase;
        }
        span {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 50px;
            color: #33333375;
            font-size: 80px !important;
            font-weight: 900;
            z-index: -0;
            text-transform: uppercase;
            background: linear-gradient( to left,rgba(255, 255, 255, 0.1) , rgba(0, 0, 0, 0));
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>
