<template>
  <div id="app">
    <table-wrapper>
      <table-custom />
      <empty-row />
      <table-custom />
    </table-wrapper>
  </div>
</template>

<script>
import EmptyRow from './components/EmptyRow.vue';
import TableCustom from './components/TableCustom.vue';
import TableWrapper from './components/TableWrapper.vue';

export default {
  name: "App",
  components: { TableWrapper, TableCustom, EmptyRow }
}
</script>

<style lang="sass">
#app
  color: black
  font-family: 'Open sans'
</style>
