<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import ListCard from './components/ListCard.vue'
import AppLoader from './components/AppLoader.vue'
import AppSearch from './components/AppSearch.vue'



export default {
  components: {
    AppHeader,
    ListCard,
    AppLoader,
    AppSearch
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {

      let myURL = store.apiURL;


      axios.get(store.apiURL)
        .then(results => {
          store.ListCard = results.data.data
          store.loading = false
        })
        .catch(err => {
          console.log(err);
        })

    },
    getArchetype() {
      axios.get(store.apiArchetypeURL)
        .then(results => {
          let archetype = results.data
          store.ListArchetype = archetype
          console.log(archetype);
        })
    }
  },
  created() {
    this.getCard();
    this.getArchetype()
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <AppLoader v-if="store.loading" />
    <AppSearch @search="getCard" />
    <ListCard />

  </main>
</template>

<style lang="scss">
@use './styles/partials/variables.scss' as *;
@use './styles/general.scss' as *;


main {
  background-color: $main-color;
  min-height: 600px;
  padding: 20px;
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>
