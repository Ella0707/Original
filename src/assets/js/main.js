new Swiper('.about-store__right-block', {
    slidesPerView: 1,
    speed: 800,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.about-store__arrow-next',
        prevEl: '.about-store__arrow-prev',
    },

    on: {
        init: sliderNumber,
        slideChange: sliderNumber
    },

    pagination: {
            el: '.swiper-progressbar',
            type: "progressbar",
        },
});

function sliderNumber() {
    let currentSlide = this.realIndex + 1;
    if (currentSlide < 10) {
        currentSlide = '0' + currentSlide
    }

    $('.slider-number').text(currentSlide);
}

new Swiper('.format__slide', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 800,

    navigation: {
        nextEl: '.format__arrow-next',
        prevEl: '.format__arrow-prev',
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",

        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },
});


new Swiper('.examples__slides',{
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 800,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",

        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },

    navigation: {
        nextEl: '.examples__arrow-next',
        prevEl: '.examples__arrow-prev',
    },
});


new Swiper('.plan__slider', {
    slidesPerView: 1.2,
    spaceBetween: 35,
    slidesPerGroup: 1,
    initialSlide: 2,

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",

        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },

    navigation: {
        nextEl: '.plan__arrow-next',
        prevEl: '.plan__arrow-prev',
    },

    breakpoints: {

        769: {
            slidesPerView: 4,
            spaceBetween: 41,
            slidesPerGroup: 4,
        }
    }
});


new Swiper('.step__slider', {
    slidesPerView: 1.25,
    spaceBetween: 25,
    slidesPerGroup: 1,

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",

        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                number = "0" + number;
            }
            return number;
        },
    },

    navigation: {
        nextEl: '.step__arrow-next',
        prevEl: '.step__arrow-prev',
    },

    breakpoints: {

        769: {
            slidesPerView: 4,
            spaceBetween: 41,
            slidesPerGroup: 4,
        }
    }
});




// popup

$('.popup-link').click(function (e) {
    e.preventDefault();
    $('.popup').fadeIn(800);
    $('body').toggleClass('lock');
});

$('.close-popup').click(function () {
    $('.popup').fadeOut(800);
    $('body').toggleClass('lock');
});


// закрытие основного попапа в случае отправки заявки 
$('.popup-accepted').click(function () {
    $('.popup').fadeOut(800);
});


// окно "заявка принята"
$('.popup-accepted').click(function (e) {
    e.preventDefault();
    $('.accepted').fadeIn(800);
});

$('.close-popup').click(function () {
    $('.accepted').fadeOut(800);
});



// spoller 
$(document).ready(function () {
    $('.FAQ__spoller-title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});






// let menuBtn = document.querySelector('.menu-btn');
// let menu = document.querySelector('.header__nav');
// let menuMob = document.querySelector('.header__nav-list');

// menuBtn.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })

// if menuMob.addEventListener('click', function(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// })




// мобильное меню
const iconMenu = document.querySelector('.menu-btn');
const menuMob = document.querySelector('.header__nav');
const anchors = document.querySelectorAll('a[href*="#"]');


if(iconMenu) {

    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuMob.classList.toggle('active');
    });
}

// плавная прокрутка

for(let anchor of anchors ) {
    anchor.addEventListener('click', function(event) {
    event.preventDefault()
    let blockID = anchor.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
    behavior: "smooth",
    block: "start"

    
})
if (iconMenu.classList.contains('active')) {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuMob.classList.remove('active');
 }
})
}

// video

vid = document.getElementById('video');

vid.addEventListener('mouseenter', function() {
    vid.play();
});

vid.addEventListener('mouseleave', function() {
    vid.pause();
})


// video_assortment

vidAssortment = document.getElementById('video_assortment');

vidAssortment.addEventListener('mouseenter', function() {
    vidAssortment.play();
});

vidAssortment.addEventListener('mouseleave', function() {
    vidAssortment.pause();
})



// map
$(".point").hover(
    function() {
        $(this).addClass('active').next().addClass('active');
    }, 
    function() {
        $(this).removeClass('active').next().removeClass('active');
    }
);




