new Swiper ('.about-store__right-block');



new Swiper ('.format__slide');
new Swiper ('.plan__slider');
new Swiper ('.step__slider');




$(document).ready(function(){
    $('.FAQ__spoller-title'). click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
