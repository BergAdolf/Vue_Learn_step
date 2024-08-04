Vue.component('digit-component', {
    props:{
        currentValue:{
            type: Number,
            default: 1
        },
        maxValue:{
            type: Number,
            default: Infinity           
        },        
        minValue:{
            type: Number,
            default: -Infinity           
        }
    },
    template:'\
    <div class="digit-component"> \
        <input type="number" v-model="number" placeholder="输入...">\
        <button \
            @click="increaseNumber" \
            :disabled="number>=maxValue">+</button>\
        <button \
            @click="decreaseNumber" \
            :disabled="number<=minValue">-</button>\
    </div>\
    ',
    data() {
        return {
            number: this.currentValue
        }
    },
    methods:{
        increaseNumber: function(){
            if(this.number >= this.maxValue)
                return;
            this.number++;
            this.$emit('input', this.number)
        },
        decreaseNumber: function(){
            if(this.number <= this.minValue)
                return;
            this.number--;
            this.$emit('input', this.number)
        } 
    }
})
