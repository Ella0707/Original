new Swiper('.about-store__right-block'); 



new Swiper('.assortment__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


new Swiper('.format__slide');
new Swiper('.examples__slides');

new Swiper('.plan__slider', {
    slidesPerView: 4,
    spaceBetween: 10,
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

new Swiper('.step__slider', {
    slidesPerView: 4,
    spaceBetween: 10,
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






// popap

$('.popup-link').click(function (e) {
    e.preventDefault();
    $('.popup').fadeIn(800);
    // $('html').addClass('no-scroll');
});

$('.close-popup').click(function () {
    $('.popup').fadeOut(800);
    // $('html').removeClass('no-scroll');
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

