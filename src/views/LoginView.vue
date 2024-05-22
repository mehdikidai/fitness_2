<template>
    <div class="login-page">
       <h1>login page</h1>
       <router-link :to="{name:'home'}">Go To Home</router-link>
       
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.login-page{
    min-height: 100dvh;
    background: #090707;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    h1{
        text-transform: capitalize;
        color: white;
    }
    a{
        padding: 8px 26px;
        background: #0a80d9;
        color: #ffffff;
        border-radius: 6px;
    }
}
</style>