<template>
    <header>
        <nav class="container">
            <router-link to="/" class="logo">LOGO</router-link>
            <div class="ul_box">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/services">services</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>
        </nav>
    </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
    height: 70px;
    background: var(--color-background);
    position: fixed;
    inset: 0;
    z-index: 99;
    nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            color: #fff;
            font-size: 24px;
            text-transform: uppercase;
            font-weight: 600;
        }
        .ul_box {
            display: flex;
            gap: calc(var(--space) * 2.5);
            a{
                color: #fff;
                &.router-link-active{
                    color: #0a80d9;
                }
            }
        }
    }
}
</style>
