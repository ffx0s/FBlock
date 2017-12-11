(function () {

  window.App = new Vue({
    el: '#App',
    data: {
      items: []
    },
    created () {
      Actions.load(data => {
        this.items = data
      })
    },
    methods: {
      add () {
        this.items.push({
          targetUrl: '',
          replaceUrl: '',
          status: true
        })
      },
      remove (index) {
        this.items.splice(index, 1)
      },
      reload () {
        Actions.reload(this.items)
      }
    }
  })

})();
