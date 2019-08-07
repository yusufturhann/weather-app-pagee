import { $ } from "./vendors";
 
$(".carousel").slick({
    infinite: false,
    slidesToShow: 1,
    arrows: true,
    prevArrow: `
    
    <button class="carousel__btn carousel__btn--left" type="button">
        <img src="assets/img/icons/left-arrow.png" alt="left" title="left"/>
    </button>
    `,
    nextArrow: `
    <button class="carousel__btn carousel__btn--right" type="button">
        <img src="assets/img/icons/right-arrow.png" alt="right" title="right"/>
    </button>
    `,
});
$('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if(currentSlide == 0){
        $('.carousel__item--front').removeClass('push-right');
        $('.carousel__item--right').removeClass('get-center');
    }
    else if(currentSlide == 1) {
        $('.carousel__item--left').removeClass('get-center');
        $('.carousel__item--front').removeClass('push-left');
        $('.carousel__item--right').removeClass('push-right');

       $('.carousel__item--front').addClass('push-right');
       $('.carousel__item--right').addClass('get-center');
    } else if(currentSlide == 2) {
        $('.carousel__item--front').removeClass('push-right');
        $('.carousel__item--right').removeClass('get-center');

        $('.carousel__item--left').addClass('get-center');
        $('.carousel__item--front').addClass('push-left');
        $('.carousel__item--right').addClass('push-right');
    } 
    
});
 