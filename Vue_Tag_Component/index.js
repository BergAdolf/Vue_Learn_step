var app = new Vue({
    el: '#app',
    data: {
        pageNumber: 1
    },
    methods: {
        transferPage: function(val) {
            this.pageNumber = val;
        }   
    }
})

