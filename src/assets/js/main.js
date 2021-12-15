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



// map

$('.point-link').hover (
    function() {
        $('.description').html($(this).attr('description-data'));
        $('.description').fadeIn(50);
        $('.description').style.top = (e.y);
        $('.description').style.left = (e.x);

        let coords = target.getBoundingClientRect();

        let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0; // не заезжать за левый край окна
  
        let top = coords.top - tooltipElem.offsetHeight - 5;
        if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
          top = coords.top + target.offsetHeight + 5;
        }
  
        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';

    },
    function() {
        $('.description').fadeOut(50);
    }
)

// const description = document.querySelector('.description');
// const point = document.querySelector('.point-link');

// point.forEach(point => {
//     point.addEventListener('mosemove', function(e) {
//         description.innerText = this.dataset.title;
//         point.style.top = (e.y + 20) + 'px';
//         point.style.top = (e.x + 20) + 'px';
//     });
// });


//  let tooltipElem;

//     document.onmouseover = function(event) {
//       let target = event.target;

//       // если у нас есть подсказка...
//       let tooltipHtml = target.dataset.tooltip;
//       if (!tooltipHtml) return;

//       // ...создадим элемент для подсказки

//       tooltipElem = document.createElement('div');
//       tooltipElem.className = 'tooltip';
//       tooltipElem.innerHTML = tooltipHtml;
//       document.body.append(tooltipElem);

//       // спозиционируем его сверху от аннотируемого элемента (top-center)
//       let coords = target.getBoundingClientRect();

//       let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//       if (left < 0) left = 0; // не заезжать за левый край окна

//       let top = coords.top - tooltipElem.offsetHeight - 5;
//       if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
//         top = coords.top + target.offsetHeight + 5;
//       }

//       tooltipElem.style.left = left + 'px';
//       tooltipElem.style.top = top + 'px';
//     };

//     document.onmouseout = function(e) {

//       if (tooltipElem) {
//         tooltipElem.remove();
//         tooltipElem = null;
//       }

//     };





		$(document).ready(function(){//страница загрузилась
			$('.point-link').hover(function(){	//при наведении на элемент:
				var helptext = $(this).attr('description-data') 	//текст подсказки
				$('.description').html(helptext).show();	//размещаем текст подсказки в блок тултипа и делаем его видимым
				//далее устанавливаем тултипу значения позиции с помощью абсолютного позиционирования:
				$('.description').offset({top:$(this).offset(0).top+$(this).height(0),left:$(this).offset(0).left});
			},function(){
				$('.description').hide();	//скрываем тултип 
			});
		});
		//в итоге подсказка окажется ровно под элементом наведения
	