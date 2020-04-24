window.addEventListener("DOMContentLoaded", function () {
	let burger = document.querySelector('.burger'),
		menu = document.querySelector('.header__nav');

	listLi = document.querySelectorAll('.li-anim');
	burger.addEventListener('click', function () {
		burger.classList.toggle("burger-active");
		menu.classList.toggle("open-menu");
	});
	// scroll-fixed
	let boxContainer = document.getElementById('facts'),
		boxContainerItems = document.querySelectorAll('.facts__column');
	function returnLastArr(arr) {
		return arr[arr.length - 1];
	}
	let lastBox = returnLastArr(boxContainerItems);
	if (window.screen.availWidth > 1200) {
		window.addEventListener('scroll', () => {
			function fixedContainer() {
				if (boxContainer.getBoundingClientRect().top <= 90) {
					boxContainer.classList.add('active-fixed');
				} else {
					boxContainer.classList.remove('active-fixed');
				}
			}
			fixedContainer();
			function endFixedContainer() {
				if (lastBox.getBoundingClientRect().top <= 250) {
					boxContainer.classList.remove('active-fixed');
					boxContainer.classList.add('active-end');
				} else {
					boxContainer.classList.remove('active-end');
				}
			}
			endFixedContainer();
		});
	}
});