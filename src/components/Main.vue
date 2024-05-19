<template>
    <div class="main">
        <slot />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
    min-height: calc(100vh - 70px);
    background: var(--color-background);
}
</style>
