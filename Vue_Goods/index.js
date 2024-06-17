var app = new Vue({
	el: '#app',
	data: {
		goods: [{'name': 'iphone7', 'price' : 6188, number: 1},
		{'name': 'ipad Pro', 'price' : 5888, number: 1},
		{'name': 'MacBook Pro', 'price' : 21488, number: 1}]
	},
	computed:{
		amtSum: function(){
			var amtSum = 0;
			for(good of this.goods){
				amtSum = amtSum + good['price'] * good['number'];
			}
			return amtSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');

		}
	}
	,
	methods:{
		removeGoodList: function(index) {
			// body...
			this.goods.splice(index, 1)
		},
		//商品增减
		reduceNumber: function(index){
			if(this.goods[index].number === 1) return;
			this.goods[index]['number']--;

		},
		addNumber: function(index){
			this.goods[index]['number']++;
		}
	}

})
