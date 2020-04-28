window.addEventListener("DOMContentLoaded", function () {
	let burger = document.querySelector('.burger'),
		menu = document.querySelector('.header__nav');

	listLi = document.querySelectorAll('.li-anim');
	burger.addEventListener('click', function () {
		burger.classList.toggle("burger-active");
		menu.classList.toggle("open-menu");
	});




	// filter
	let filterItem = document.querySelectorAll('.catalog__filter-item'),
		productItem = document.querySelectorAll('.catalog__items-item'),
		containerFilter = document.querySelector('.catalog__filter');




	// We get the attribute and add a tick by click


	function filterCheckBox() {
		for (let i = 0; i < filterItem.length; i++) {
			filterItem[i].addEventListener('click', function () {
				filterItem[i].classList.toggle('catalog__filter-item--active');
			});
		}
	}
	filterCheckBox();


	//function hideProdcut() {
	//	for (let i = 0; i < productItem.length; i++) {
	//		productItem[i].classList.add('_hide');
	//	}
	//}
	//function showProduct(elem, b, event) {
	//	for (let i = 0; i > productItem.length; i++) {
	//		productItem[i].classList.remove('_hide');
	//		productItem[i].classList.add('_show');
	//		if (productItem[i].getAttribute('data-filter-name') == elem) {
	//			productItem[i].classList.remove('_hide');
	//			productItem[i].classList.add('_show');
	//		}
	//	}
	//}

	//containerFilter.addEventListener('click', function (event) {
	//	let target = event.target;
	//	if (target && target.classList.contains('catalog__filter-item')) {
	//		hideProdcut();
	//		for (let j = 0; j < filterItem.length; j++) {
	//			showProduct(filterItem[j].getAttribute('data-filter'));
	//		}
	//	}
	//})


	// price-click

	let priceBtn = document.querySelectorAll('.product__btn-price');
	let priceGold = document.getElementById('price-span');
	//priceBtn.forEach(id, item, () => {
	//	priceBtn.addEventListener('click', function (event) {
	//		event.preventDefault;
	//		item.classList.add('product__btn-price--active');
	//	});
	//})

	priceBtn.forEach((item, id) => {
		item.addEventListener('click', function (event) {
			for (let i = 0; i < priceBtn.length; i++) {
				priceBtn[i].classList.remove('product__btn-price--active');
			}
			event.preventDefault();
			item.classList.add('product__btn-price--active');
			let priceData = item.getAttribute('data-price');
			priceGold.textContent = priceData;
		})
	});
});