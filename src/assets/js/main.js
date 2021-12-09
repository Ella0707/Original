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

new Swiper('.assortment__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
        nextEl: '.assortment__arrow-next',
        prevEl: '.assortment__arrow-prev',
    },
});


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

// мобильное меню
const iconMenu = document.querySelector('.menu-btn');
if(iconMenu) {
    const menuMob = document.querySelector('.header__nav');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuMob.classList.toggle('active');
    });
}



// video

vid = document.getElementById('video');

vid.addEventListener('mouseenter', function() {
    vid.play();
});

vid.addEventListener('mouseleave', function() {
    vid.pause();
})