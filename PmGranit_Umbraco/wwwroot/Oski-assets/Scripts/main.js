$(function(){

	// Кастомный скролл-бар
	if($(document).width() > 992) {
			$('.wrapper').mCustomScrollbar({
				mouseWheel: {
					deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
			}
			});	
		} else {
			$('.wrapper').mCustomScrollbar('destroy');
			}

  // Перенос блоков в мобильное меню
	let removeMenuElements = function() {
		if($(window).width() <= 400) {
			$('.header__menu').append($('.header__login'));
		} else {
			$('.header__login-wrap').append($('.header__login'));
		}
	}
  removeMenuElements();

  $(window).on('resize', function(){
		removeMenuElements();
		if($(document).width() > 992) {
				$('.wrapper').mCustomScrollbar(
					{
						mouseWheel: {
							deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
					}
				});	
			} else {
				$('.wrapper').mCustomScrollbar('destroy');
				}
	});

  //Настройка кликов по меню-гамбургеру
	$('.header__burger').on('click',function(e) {
		e.preventDefault();
    let navigation = $('#header-navigation'),
        navContent = navigation.find('.header__menu');
		$('.header__burger').toggleClass('active');	 	
	 	if($('.header__burger').hasClass('active')) {
      navigation.addClass('open');
	 		$('body').css('overflow','hidden');
      navigation.on('mouseup', function (e){
        if (!navContent.is(e.target) && navContent.has(e.target).length === 0) {
          $('.header__burger').removeClass('active');
          navigation.removeClass('open');
          $('body').css('overflow','auto');
        }
      });
	 	} else {
      navigation.removeClass('open');
			$('body').css('overflow','auto');
		 }
	});

	// Активация слайдеров на мобильном разрешении, главная страница
	$(window).on('resize', function (e) {
		let init = $('.main-memorials__block').data('init-slider'),
		    init2 = $('.main-works__block').data('init-slider');
		if (window.innerWidth < 577) {
			if (init != 1) {
				$('.main-memorials__block').slick({
					infinite: true,
					centerMode: true,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					variableWidth: true
				}).data({
						'init-slider': 1
					});
			}
			if (init2 != 1) {
				$('.main-works__block').slick({
					infinite: true,
					centerMode: true,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					variableWidth: true
				}).data({
						'init-slider': 1
					});
			}
		}
		else {
			if (init == 1) {
				$('.main-memorials__block').slick('unslick').data({
					'init-slider': 0
				});
			}
			if (init2 == 1) {
				$('.main-works__block').slick('unslick').data({
					'init-slider': 0
				});
			}
		}
	}).trigger('resize');

	if($('#map').length != 0) {
		setTimeout(function(){
			let mapSrc = $('#map iframe').attr('data-original');
			$('#map iframe').attr('src',mapSrc);
		},5000);
	}		

});