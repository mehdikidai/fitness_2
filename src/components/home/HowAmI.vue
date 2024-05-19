<template>
    <div class="how-am-i container">
          <div class="box"></div>
          <div class="box"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.how-am-i{
    //height: 200px;
    //background: red;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space);
    .box{
        aspect-ratio: 1;
        background: rgb(14, 14, 14);
    }
}
</style>