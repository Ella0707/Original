new Swiper ('.about-store__right-block');



new Swiper ('.format__slide');
new Swiper ('.plan__slider');
new Swiper ('.step__slider');






// popap

$('.popup-link').click(function(e) {
    e.preventDefault();
    $('.popup').fadeIn(800);
    // $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup').fadeOut(800);
    // $('html').removeClass('no-scroll');
});


// закрытие основного попапа в случае отправки заявки 
$('.popup-accepted').click(function() {
    $('.popup').fadeOut(800);
    // $('html').removeClass('no-scroll');
});


// окно "заявка принята"
$('.popup-accepted').click(function(e) {
    e.preventDefault();
    $('.accepted').fadeIn(800);
    // $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.accepted').fadeOut(800);
    // $('html').removeClass('no-scroll');
});



// spoller 
$(document).ready(function(){
    $('.FAQ__spoller-title'). click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
