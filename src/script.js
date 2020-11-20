

function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();

    $(document).ready(function () {
        $('.header__burger').click(function (event) {
            $('.header__burger,.header__menu').toggleClass('active');
        })
    })
   
$('.slider__body').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 883,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 610,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $('.slider__bodysec').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            slidesToShow: 1
    })

   
    $('.header__btn').on('click', function() {

      let headerAnchor = $(this);
      $('html, body').animate({
        scrollTop: $("#formanch").offset().top
      }, 700);
  });
    $('.anchor').on('click', function() {

      let anchor = $(this);
      $('html, body').animate({
          scrollTop: $(anchor).scrollTop()
      });
      
  });

  $('.tab').on('click', function(e) {
    e.preventDefault();
    $('.tab').removeClass('active');
    $(this).addClass('active');
  })

  $('.link').on('click', function(e) {
    e.preventDefault();
    $('.link').removeClass('active');
    $(this).addClass('active');
  })


 
