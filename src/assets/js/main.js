new Swiper('.about-store__right-block', {
    slidesPerView: 1,
    speed: 800,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
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
    },

    // pagination: {
    //     el: '.swiper-progressbar',
    //     type: "progressbar",
    // },

    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
    },
});



new Swiper('.assortment__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});




new Swiper('.format__slide', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    speed: 800,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: "fade",
    fadeEffect: {
        crossFade: true
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});





new Swiper('.plan__slider', {
    slidesPerView: 4,
    spaceBetween: 41,
    slidesPerGroup: 4,

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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // breakpoints: {
    //     375: {
    //         slidesPerView: 1.2,
    //         spaceBetween: 5,
    //         slidesPerGroup: 1,
    //     }
    // }


});




new Swiper('.step__slider', {
    slidesPerView: 4,
    spaceBetween: 38,
    slidesPerGroup: 4,

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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});






// popup

$('.popup-link').click(function (e) {
    e.preventDefault();
    $('.popup').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup').fadeOut(800);
    $('html').removeClass('no-scroll');
});


// закрытие основного попапа в случае отправки заявки 
$('.popup-accepted').click(function () {
    $('.popup').fadeOut(800);
    // $('html').removeClass('no-scroll');
});


// окно "заявка принята"
$('.popup-accepted').click(function (e) {
    e.preventDefault();
    $('.accepted').fadeIn(800);
    // $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.accepted').fadeOut(800);
    // $('html').removeClass('no-scroll');
});



// spoller 
$(document).ready(function () {
    $('.FAQ__spoller-title').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

