window.addEventListener("DOMContentLoaded", function () {
    let burger = document.querySelector('.burger'),
        menu = document.querySelector('.header__nav');

    listLi = document.querySelectorAll('.li-anim');
    burger.addEventListener('click', function () {
        burger.classList.toggle("burger-active");
        menu.classList.toggle("open-menu");

    });
    // scroll-fixed
    let boxContainer = document.getElementById('facts');
    function fixedContainer() {
        if(boxContainer.getBoundingClientRect().top <= 90){
           boxContainer.classList.add('active-fixed');
        }else {
            boxContainer.classList.remove('active-fixed');
        }
    }
    setInterval(fixedContainer, 100);
});