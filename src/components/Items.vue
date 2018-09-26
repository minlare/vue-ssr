<template>
  <div class="items">
    <h2>My Items</h2>
    <div>{{serverMessage}}</div>
    <div>
      <div v-for="item in items" :key="item.id">{{item.id}}</div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ store }) {
    return store.dispatch('fetchItems');
  },
  computed: {
    serverMessage() {
      return this.$store.state.serverMessage;
    },
    items() {
      return this.$store.state.items;
    }
  }
};
</script>

