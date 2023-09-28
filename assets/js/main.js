(function ($)
  { "use strict"

$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $(".header").removeClass("sticky-bar");
      $('.navigation-new').removeClass('navigation-new-block');
    } else {
      $(".header").addClass("sticky-bar");
      $('.navigation-new').addClass('navigation-new-block');
    }
  });
 
/*Popup*/
$('.nav-tel__btn').on('click', function(){
  $('.modal-window').addClass('show');
  $('.modals-wrapper').addClass('show');
});
$('.overlay').on('click', function (){
  $('.modals-wrapper').removeClass('show');
  $('.modal-window_mini').removeClass('show');
});
$('.modal-window-form__btn').on('click', function (){
  $('.modal-window').removeClass('show');

});
$('.modal-window__btn').on('click', function (){
  $('.modals-wrapper').removeClass('show');
  $('.modals-wrapper_mini').removeClass('show');
});

//mobile-menu

$('.mobile-menu').on('click', function(){
  $('.tel-menu').toggle();
})

//Slider
const swiper1 = new Swiper('.swiper1', {
  direction : 'horizontal',
  loop:true,
  stopOnLastSlide:false,
  autoplay:{
    delay:3000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination1',
  },

});
const swiper2 = new Swiper('.swiper2', {
  direction : 'horizontal',
  loop:true,
  stopOnLastSlide:false,
  autoplay:{
    delay:3000
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Scroll Down
$(document).ready(function() {
  $(".offer-block__arrow_down").click(function() {
       $('html, body').animate({
           scrollTop: $(".new-collections").offset().top
       }, 1000);
   });
  });


  
//TABS

$('.category__btn').on('click', function (){
  let id = $(this).attr('data-tab'),
    content = $('.goods-tape-block__item[data-tab="' + id + '"]'),
    all = $('.goods-tape-block__item');
  if ($('category__btn_active.category__btn-all')) {
    all.addClass('show');
}
    $('.category__btn').removeClass('category__btn_active');
    $(this).addClass('category__btn_active');

    $('.goods-tape-block__item').removeClass('show');
    content.addClass('show');
    $('.category__btn-all.category__btn_active');
});
$('.category__btn-all').on('click', function (){
  $('.goods-tape-block__item').addClass('show');
})




//Pagination
$('.pag__btn').on('click', function (){
  let currTab = $(this).index();

    $('.pag__btn').removeClass('pag__btn_active');
    $(this).addClass('pag__btn_active');
});
$('[data-btn="1"]').on('click', function(){
  if ($('.pag__btn.pag__btn_active')){
    $('[data-page="2"]').removeClass('show');
    $('[data-page="1"]').addClass('show');
  }
})
$('[data-btn="2"]').on('click', function(){
  $('[data-btn="2"]').addClass('pag__btn_active');
  $('[data-btn="1"]').removeClass('pag__btn_active');
  $('.goods-tape-block__item').removeClass('show');
  $('.goods-tape-block__item-next').addClass('show');
});

//Properties
$('.edit-info__size-block__item').on('click', function (){
  let currTab = $(this).index();

    $('.edit-info__size-block__item').removeClass('edit-info__size-block__item_active');
    $(this).addClass('edit-info__size-block__item_active');
});
$('.edit-info__color-block__item').on('click', function (){
  let currTab = $(this).index();

    $('.edit-info__color-block__item').removeClass('edit-info__color-block__item_active');
    $(this).addClass('edit-info__color-block__item_active');
});


//Validation & submit
$(document).ready(function() {
  $('[data-submit]').on('click', function(e) {
      e.preventDefault();
      $(this).parent('form').submit();
      $(this).parent('div').parent('form').submit();

  })
  $.validator.addMethod(
      "regex",
      function(value, element, regexp) {
          const re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
      },
      "Please check your input."
  );

  function valEl(el) {
      el.validate({
          rules: {
              phoneNumber: {
                  required: true,
                  regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
              },
              firstName: {
                  required: true
              },
              email: {
                  required: true,
                  email: true
              },
              sms : {
                required: true
              },
              country : {
                required: true
              },
              city : {
                required: true
              },
              street : {
                required: true
              },
              house : {
                required: true
              },
              flat : {
                required: true
              },
              pay : {
                required: true
              },
              quantity : {
                required: true
              },
              coupon : {
                required: true
              },
              
          },
          messages: {
            phoneNumber: {
                  required: 'Поле обязательно для заполнения',
                  regex: 'Телефон может содержать символы + - ()'
              },
              firstName: {
                  required: 'Поле обязательно для заполнения',
              },
              email: {
                  required: 'Поле обязательно для заполнения',
                  email: 'Неверный формат E-mail'
              },
              desc : {
                required: 'Поле обязательно для заполнения',
              },
              country : {
                required: 'Поле обязательно для заполнения',
              },
              city : {
                required: 'Поле обязательно для заполнения',
              },
              street : {
                required: 'Поле обязательно для заполнения',
              },
              house : {
                required: 'Поле обязательно для заполнения',
              },
              flat : {
                required: 'Поле обязательно для заполнения',
              },
              pay : {
                required: 'Поле обязательно для заполнения',
              },
              quantity : {
                required: 'Поле обязательно для заполнения',
              },
              coupon : {
                required: 'Поле обязательно для заполнения',
              },
          },

          
          submitHandler: function(form) {
              $('.areaForLoader').fadeIn();
              let $form = $(form);
              let $formId = $(form).attr('id');
              switch ($formId) {
                  case 'form-cover':
                      $.ajax({
                              type: 'POST',
                              url: $form.attr('action'),
                              data: $form.serialize(),
                          })
                          .done(function() {
                            console.log('Success');
                          })
                          .fail(function() {
                            console.log('Fail');
                          })
                          .always(function() {
                            console.log('Always');
                            setTimeout(function() {
                              $('.areaForLoader').fadeIn();
                            }, 100);
                            setTimeout(function() {
                                $form.trigger('reset');
                            }, 500);
                            setTimeout(function() {
                              $('.modals-wrapper').fadeOut();
                          }, 100);
                          setTimeout(function() {
                            $('.modals-wrapper_mini').addClass('show');
                        }, 300);
                            setTimeout(function() {
                              $('.areaForLoader').fadeOut();
                                $form.trigger('reset');
                            }, 1100);
                          });
                      break;
                      case 'letter-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                  $('.areaForLoader').fadeIn();
                                }, 100);
                                setTimeout(function() {
                                  $('.areaForLoader').fadeOut();
                                  $('.form__message').fadeIn();
                                    $form.trigger('reset');
                                }, 100);
                            });
                        break;
                        case 'order-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                  $('.areaForLoader').fadeIn();
                                }, 100);
                                setTimeout(function() {
                                  $('.areaForLoader').fadeOut();
                                  $(location).attr('href', '../womazing/end.html');
                                    $form.trigger('reset');
                                }, 200);
                            });
                        break;
                        case 'market-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                  $('.areaForLoader').fadeIn();
                                }, 100);
                                setTimeout(function() {
                                  $('.areaForLoader').fadeOut();
                                    $form.trigger('reset');
                                }, 1100);
                            });
                        break;
                        case 'coupon-form':
                          $.ajax({
                                  type: 'POST',
                                  url: $form.attr('action'),
                                  data: $form.serialize()
                              })
                              .done(function() {
                                  console.log('Success');
                              })
                              .fail(function() {
                                  console.log('Fail');
                              })
                              .always(function() {
                                  console.log('Always');
                                  setTimeout(function() {
                                    $('.areaForLoader').fadeIn();
                                  }, 100);
                                  setTimeout(function() {
                                    $('.areaForLoader').fadeOut();
                                      $form.trigger('reset');
                                  }, 1100);
                              });
                          break;
              }
              return false;
          }
      })
  }

  
  $('.js-form').each(function() {
      valEl($(this));
  });
  
});

//bag-funct
$('.cart__item_close').on('click', function(){
  $('.cart__item').addClass('none');
  $('.cart-price__item').addClass('none');
  $('.cart__number').addClass('none');
  $('.cart-all__item').addClass('none');
})

})(jQuery);