<script>
import { store } from './../store.js'
import Card from './Card.vue'
import AppResult from './AppResult.vue'

export default {
    name: "ListCard",


    components: {
        Card,
        AppResult
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="container">
        <AppResult />
        <Card v-for="card in store.ListCard" :details="card" />
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

.container {
    margin: 0 auto;
    background-color: $white;
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;


}
</style>