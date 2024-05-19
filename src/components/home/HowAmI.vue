<template>
    <div class="how-am-i container">
        <div class="box">
            <img :src="howAmiPhoto" alt="x">
        </div>
        <div class="box">
            <h3>Who's Med Zakc?</h3>
            <p>
                I’m Mohamed zaki, a certified trainer who puts his knowledge and
                experience to help people over 3 years ago to achieve thier
                goals , bulk , lose fat , lean bulk gain muscle. I create
                personalized detailed nutrition and training programs based on
                many informations you share with me. See below for more details.
            </p>
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ul>
        </div>
    </div>
</template>

<script>
import howAmiPhoto from "@/assets/images/how-am-i.jpg";
export default {
    data() {
        return {
            howAmiPhoto,
        };
    },
};
</script>

<style lang="scss" scoped>
.how-am-i {
    //height: 200px;
    //background: red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    //gap: var(--space);
    .box {
        height: 550px;
        background: rgb(14, 14, 14);
        &:nth-child(1){
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &:nth-child(2) {
            padding-inline: calc(var(--space) * 1.5);
            padding-block: calc(var(--space) * 3);
            display: flex;
            flex-direction: column;
            gap: calc(var(--space) * 1.5);
            h3 {
                font-size: 33px;
                color: var(--color-main);
            }
            p {
                line-height: 30px;
                color: rgba(255, 255, 255, 0.6);
            }
            ul {
                li {
                    color: #fff;
                    line-height: 30px;
                }
            }
        }
    }
}
</style>
