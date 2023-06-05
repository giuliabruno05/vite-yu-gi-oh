<script>
import { store } from './store.js'
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import ListCard from './components/ListCard.vue'

export default {
  components: {
    AppHeader,
    ListCard
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCard() {
      axios.get(store.apiURL)
        .then(results => {
          store.ListCard = results.data.data
        })
        .catch(err => {
          console.log(err);
        })

    }
  },
  created() {
    this.getCard();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <select>
      <option value="alien">Alien</option>
    </select>
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


  select {
    width: 11%;
    background-color: $white;
    padding: 5px;
    border-radius: 3px;
    border-color: lightgray;
    border: hidden;
    margin-left: 65px;
  }

}
</style>
