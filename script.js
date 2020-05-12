let open_btn = document.getElementById('open-btn'),
	name_value = document.getElementsByClassName('name-value')[0],
 	budget_value = document.getElementsByClassName('budget-value')[0],
 	goods_value = document.getElementsByClassName('goods-value')[0],
 	items_value = document.getElementsByClassName('items-value')[0],
 	employers_value = document.getElementsByClassName('employers-value')[0],
 	discount_value = document.getElementsByClassName('discount-value')[0],
 	isopen_value = document.getElementsByClassName('isopen-value')[0],


	goods_item = document.getElementsByTagName('goods-item'),
	goods_btn = document.getElementsByTagName('button')[1],
	budget_btn = document.getElementsByTagName('button')[2],
	employers_btn = document.getElementsByTagName('button')[3],
	choose_item = document.querySelector('.choose-item'),
	time_value = document.querySelector('.time-value'),
	count_budget_value = document.querySelector('.count-budget-value'),
	hire_employers_item = document.querySelector('.hire-employers-item');


let money,
	name,
	prise


open_btn.addEventListener('click', () => {
	while (isNaN(money) || money == '' || money == null){
		money = prompt('Введите ваш месячный бюджет.', '');
	}

	budget_value.textContent = money;
	name_value.textContent = prompt('Введите название магазина.', '').toUpperCase();
});


goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
				
				let a = goods_item[i].value;
				mainlist.shopGoods[i] = a;
			};
		goods_value.textContent = mainlist.shopGoods;
});



let mainlist = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('какой тип товаров будет продавать?');

		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
			console.log('Good');
			mainlist.shopGoods[i];
		} else {
			i = i - 1;
			alert('Mistake!');
		}
	}
}

/*	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не бывает!')
		} else if (time > 8 || time < 17) {
			console.log('Надо работать! Нужно бабло заробатывать!');
		} else if (time > 6 || time < 22) {
			console.log('Иди гуляй на 4 стороны! У ТЕБЯ ФРИ ТАЙМ!');
		} else {
			console.log('Иди дрыхны, завтра рано вставать!');
		} 
	}


	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 4; i++){
			let name = prompt('Имя работодателя:');
			mainlist.employers[i] = name;
		}
	}



	alert('Ваш дневной бюджет: ' + mainlist.budget / 30); */


};