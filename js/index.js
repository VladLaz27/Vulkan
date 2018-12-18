$(document).ready(function(){
    $(".button a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});


var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      breakpoints: {
        1199: {
          slidesPerView: 5
        },
        991: {
          slidesPerView: 4
        },
        767: {
          slidesPerView: 3
        },
        575: {
          slidesPerView: 2
        },
        400: {
          slidesPerView: 1
        }
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });