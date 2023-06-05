<script>
import AppHeader from './components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <select>
      <option value="alien">Alien</option>
    </select>
  </main>
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

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
  }

}
</style>
