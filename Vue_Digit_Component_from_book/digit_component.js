Vue.component('digit-component', {
    props:{
        value:{
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
        <input type="number" :value="currentValue"  @change="handleChange">\
        <button \
            @click="increaseNumber" \
            :disabled="currentValue>=maxValue">+</button>\
        <button \
            @click="decreaseNumber" \
            :disabled="currentValue<=minValue">-</button>\
    </div>\
    ',
    data() {
        return {
            currentValue: this.value
        }
    },
    methods:{
        increaseNumber: function(){
            if(this.currentValue >= this.maxValue)
                return;
            this.currentValue++;
        },
        decreaseNumber: function(){
            if(this.currentValue <= this.minValue)
                return;
            this.currentValue--;
        } ,
        handleChange: function(event){
            var val = event.target.value.trim();
            
            var max = this.maxValue;
            var min = this.minValue;

            val = Number(val);
            this.currentValue = val;
            if(val > max){
                this.currentValue = max;
            }else{
                this.currentValue = min;
            }
        }
    },
    watch: {
        currentValue: function(val){
            this.$emit('input', val);
            this.$emit('on-change', val);
        },
        value: function(val){
            this.currentValue=val;
        }
    }
})
