<script>
import { store } from './../store.js'
export default {
    name: "AppResult",
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="row-search">
        <h4>Found {{ store.ListCard.length }} cards </h4>
    </div>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

.row-search {
    height: 40px;
    background-color: black;
    width: 100%;
    margin-top: 35px;


    h4 {
        color: $white;
        line-height: 40px;
        vertical-align: middle;
        margin-left: 10px;
        font-size: 0.8rem;
    }
}
</style>