<script>
export default {
    name: "AppHeader"
}
</script>


<template>
    <header>
        <img class="logo-header" src="/Yugioh_anime_logo.webp" alt="">
        <h2>Yu-Gi-Oh Api</h2>
    </header>
</template>



<style lang="scss" scoped>
header {
    height: 50px;
    display: flex;
    align-items: center;

    .logo-header {
        width: 80px;
        margin-right: 10px;
    }

    h2 {
        font-weight: 300;
    }

}
</style>