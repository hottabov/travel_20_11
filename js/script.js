function stickyButton() {

    const wrap = document.querySelector(".button__wrap");
    const container = document.querySelector(".button__container");
    const wrapTop = wrap.getBoundingClientRect().top + pageYOffset;
    const screenHeight = document.documentElement.clientHeight;


    if(pageYOffset >= (wrapTop - screenHeight)) {
        container.classList.remove('fixed');
    } else {
        container.classList.add('fixed');
    }
}

window.addEventListener("scroll", stickyButton);

AOS.init();