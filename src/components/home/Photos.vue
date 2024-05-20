<template>
    <div class="photos container" v-if="dataPhoto.length > 0">
        <div
            class="photo_box tagline"
            v-for="photo in dataPhoto"
            :key="photo.id"
        >
            <img @click="showImg" :src="photo.download_url" alt="" />
        </div>
    </div>
    <div class="photos container" v-else>
        <div class="photo_error">
            <LoadingIcon />
        </div>
    </div>
</template>

<script setup>
import LoadingIcon from "@/components/icons/LoadingIcon.vue";
import { ref, onMounted } from "vue";
import axios from "axios";


const dataPhoto = ref([]);

const showImg = () => {
    alert("hi");
};

onMounted(async () => {
    const a = await axios("https://picsum.photos/v2/list?page=4&limit=8");
    if (a.status === 200) {
        dataPhoto.value = a.data;
    }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/media";
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
        clip-path: inset(0 0 0 round 0px);
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
