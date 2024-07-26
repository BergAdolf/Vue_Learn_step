Vue.component('mybutton', {
    props:{
        color:{
            type: String,
            default: ""           
        },
        buttonAble:{
            type: Boolean,
            default: false
        }
    },
    template:'\
            <button \
                @click="clickButton" \
                :disabled="buttonAble1"\
                class="buttonType">\
                <slot></slot>\
            </button>\
        '
    ,
    data() {
        return {
            buttonAble1: this.buttonAble,
            buttonType:{
                "color": this.color
            }
        }
    },
    methods:{
        clickButton: function(event){
            this.$emit("on-click", event);
        }
    },
    watch: {
        buttonAble: function(val){
            this.buttonAble1=val;
        },
        color: function(val){
            this.color=val;
        }
    }
})
