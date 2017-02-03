new Vue({
  el: '#app',
  data: {
    beerName: 'First beer',
    brewery: 'First brewery',
    abv: '12%'
  },

  methods: {
    getBeerName: function() {
      debugger;
      Vue.http.options.xhr = { withCredentials: true };
        this.$http.get(
          'https://api.brewerydb.com/v2/beers/?name=Coors%20Light&format=json',
          {
            params: {
              'key': 'ed6c6f5871daaf66b2e594ed46cc735c'
            },
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          },{

              }).then(  (data) => {
                debugger;
              })
                .catch( (error) => {
                  debugger;
                });
        }
    }

  // methods: {
  //   getBeerName: function() {
  //
  //
  //
  //     var req = new XMLHttpRequest();
  //     req.open('GET', 'https://api.brewerydb.com/v2/beers/?name=Coors%20Light&key=ed6c6f5871daaf66b2e594ed46cc735c&format=json')
  //
  //     req.onload = function() {
  //       debugger;
  //     }
  //     req.withCredentials = true;
  //     req.send();
  //   }
  // }
})
