new Vue({
  el: '#app',
  data: {
    beerName: '',
    style: '',
    abv: ''
  },

  methods: {
    getBeerName: function() {
      const set = this.$set;
      this.$http.get('http://localhost:5500/api')
      .then((data) => {
        const beerName = data.body[0].name;
        const style = data.body[0].style.name;
        const abv = data.body[0].abv;
        set(this, 'beerName', beerName);
        set(this, 'style', style);
        set(this, 'abv', abv);
      })
      .catch((error) => {
        console.log('nope there is an error', error);
      });
      }
    }
})
