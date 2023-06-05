<script>
import { store } from './../store.js'
import Card from './Card.vue'

export default {
    name: "ListCard",

    components: {
        Card
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
        <div class="row-search">
            <h4>Found 15 cards</h4>
        </div>
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

    .row-search {
        height: 40px;
        background-color: black;
        width: 100%;


        h4 {
            color: $white;
            line-height: 40px;
            vertical-align: middle;
            margin-left: 10px;
            font-size: 0.8rem;
        }
    }
}
</style>