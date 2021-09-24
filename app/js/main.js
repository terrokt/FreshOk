$(function () {
  $('.hero__slider').slick({
    prevArrow: $('.hero__arrow-prev'),
    nextArrow: $('.hero__arrow-next'),
    autoplay: true, 
  });
  var mixer = mixitup('.products__list');
});