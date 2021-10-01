$(function () {
  $('.hero__baner').slick({
    prevArrow: $('.hero__arrow-prev'),
    nextArrow: $('.hero__arrow-next'),
    autoplay: true,
  });

  $('.header__btn').on('click', function () {
    $('.menu__list').toggleClass('menu--active');
    $('.header__btn').toggleClass('header__btn--active');
  });

  
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".menu__list"); // Элемент, клик по которому не должен приводить к закрытию. 
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
       $('.menu__list').removeClass('menu--active');
       $('.header__btn').removeClass('header__btn--active');
    }
  });

  

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


});