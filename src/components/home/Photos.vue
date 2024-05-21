<template>
    <div class="photos container" v-if="dataPhoto.length > 0">
        <div
            class="photo_box tagline"
            v-for="photo in dataPhoto"
            :key="photo.id"
        >
            <img :src="photo.download_url" alt="" />
            <button @click="showImg(photo.download_url)" class="show_img">
                <i class="material-symbols-outlined">add</i>
            </button>
        </div>
    </div>
    <div class="photos container" v-else>
        <div class="photo_error">
            <LoadingIcon />
        </div>
    </div>
    <!-- <div class="modal" v-if="isOpen" @click="hiddenModel">

    </div> -->
    <ModalBox :open="isOpen" @Hidden="hiddenModel">
        <div class="boxImg">
            <img :src="imgActive" alt="">
        </div>
    </ModalBox>
</template>

<script setup>
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import ModalBox from "../Modal.vue";




const dataPhoto = ref([]);
const isOpen = ref(false)
const imgActive = ref(null)

const showImg = (img) => {
    console.log(img)
    isOpen.value = true
    imgActive.value = img
};

const hiddenModel = (e) =>{
    console.log(e)
    //e.target.className === "modal" ? isOpen.value = false : null
    isOpen.value = false
    
}

onMounted(async () => {
    const a = await axios("https://picsum.photos/v2/list?page=4&limit=8");
    if (a.status === 200) {
        dataPhoto.value = a.data;
    }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/media";

.boxImg{
    width: calc(100vw - 40px);
    max-width: 650px;
    aspect-ratio: 1;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    //clip-path: inset(0 0 0 round 6px);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.photos {
    //background: red;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space);
    .photo_box {
        background: #0e0e0e;
        aspect-ratio: 1;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        //clip-path: inset(0 0 0 round 0px);
        clip-path: inset(0 0 0 round 6px);
        position: relative;
        img {
            object-fit: cover;
            width: 100%;
            aspect-ratio: 1;
            transform: scale(1);
            transition: all 0.3s ease-in-out;
            &:hover {
                transform: scale(1);
            }
        }
        .show_img{
            position: absolute;
            bottom: 10px;
            right: 10px;
            cursor: pointer;
            width: 24px;
            height: 24px;
            border: none;
            border-radius: 50%;
            background: var(--color-main);
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .3s ease-in-out;
            i{
                font-size: 16px;
                color: #fff;
            }
        }

        
    }
    .photo_error {
        background: #0e0e0e;
        grid-column: 1/5;
        height: 250px;
        //clip-path: inset(0 0 0 round 12px);
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            color: rgba(255, 255, 255, 0.5);
            width: 33px;
            height: 33px;
        }
    }
}

@include media.media(phone) {
    .photos {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
