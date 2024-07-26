var app = new Vue({
    el: '#app',
    data: {
        page: 1,
        checked1: [],
        checked2: [],
        text:""
    },
    methods: {
        nextPage: function(){
            this.page = this.page + 1;
        },
        backPage: function(){
            this.page = this.page - 1;
        },
        reset:  function(){
            if(this.page === 1){
                this.checked1.splice(0, this.checked1.length);
            }else if(this.page === 2){
                this.checked2.splice(0, this.checked2.length);
            }else{
                this.text="";
            }
        }
    }
})

