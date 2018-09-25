<template>
  <div id="app">
    <h1>Vue Component</h1>
    <div>{{jsonItems}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    jsonItems() {
      return JSON.stringify(this.$store.state.items);
    }
  }
};
</script>

