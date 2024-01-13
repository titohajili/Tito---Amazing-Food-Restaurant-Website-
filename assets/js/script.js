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
})

