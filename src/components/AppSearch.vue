<script>
import { store } from './../store.js'
export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <select v-model="store.searchText">
        <option v-for="option in store.ListArchetype" @click="$emit('search')" value="alien">{{ option.archetype_name }}
        </option>
    </select>
</template>
<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

select {
    width: 11%;
    background-color: $white;
    padding: 5px;
    border-radius: 3px;
    border-color: lightgray;
    border: hidden;
    margin-left: 65px;
}
</style>