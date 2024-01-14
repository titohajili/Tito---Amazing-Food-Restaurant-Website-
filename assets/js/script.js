'use strict'

//PRELOAD

//loading will be end aftter document is loaded

const preloader = document.querySelector('[data-preaload]');

window.addEventListener('load', function () {
    preloader.classList.add('loaded');
    this.document.body.classList.add('loaded');
})
/* ADD EVENT LISTENER ON MULTIPLE ELEMENTS */
const addEventonElements = function (elements, eventType, callback) {
    for(let i = 0, len = elements.lenght; i < len; i++ ) {
        elements[i].addEventListener(eventType, callback);
    }
}


//      NAVBAR----------------------
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

navTogglers.forEach(function(navToggler) {
    navToggler.addEventListener("click", toggleNavbar);
});

//    HEADER---------------

const header = document.querySelector('[data-header]');

let lastScrollPos = 0;

const hideHeader = function() {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");

    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener('scroll', function (){
    if (this.window.scrollY > 50) {
        header.classList.add("active");
        hideHeader();
    } else{
        header.classList.remove("active");
    }
});

//HERO SLIDER

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function () {
    if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
}; 

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }

    updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

// AUTO SLIDE
let autoSlideInterval;

const autoSlide = function () {
    autoSlideInterval = setInterval(function () {
        slideNext();
    }, 7000);
};

function addEventToElements(elements, event, callback) {
    elements.forEach(function (element) {
        element.addEventListener(event, callback);
    });
}

addEventToElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
    clearInterval(autoSlideInterval);
});

addEventToElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);
