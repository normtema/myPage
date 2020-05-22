$(function(){

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider-dotshead'
    });
    
    $('.slider-dotshead').slick({
        slidesToShow:4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });
      
    $('.presets__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left pres" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right pres" src="img/arrows-right.svg" alt="">',
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
    

    
    
    
    
    });
    