const axios = require('axios');

module.exports = {
  template:
    `<div>
      <div>Hello World</div>
      <div v-for="item in items">{{item.name}}</div>
      <div>End world</div>
      <div>{{jsonItems}}</div>
      <div>After JSON</div>
    </div>`
  ,
  data() {
    return {
      items: [{
        name: 'Test item before api'
      }]
    }
  },
  computed: {
    jsonItems() {
      return JSON.stringify(this.items);
    }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      return axios.get('http://localhost:8080/items.json')
        .then(response => {
          this.items = response.data;
        }).catch(err => {
          console.log('Axios ERROR', err);
        });
    }
  }
};
