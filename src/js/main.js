// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { type } from 'jquery';

SwiperCore.use([Navigation, Pagination]);

var swiper = new Swiper('.swiper-container', {
  speed: 600,
  allowTouchMove: false,
  // fadeEffect: {crossFade: true},
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1000: {
      // hiddenClass: '.swiper-pagination-hidden'
    }
  }
});

let mySwiper = new Swiper('.reviews_top-slider', {
  wrapperClass: 'top_slider-wrapper',
  slideClass: 'slide_item',
  speed: 750,
  allowTouchMove: false,
  // fadeEffect: {crossFade: true},
  direction: 'horizontal',
  pagination: {
    el: '.top_slider-pag',
    clickable: true,
  },
});

$('.menu_btn').on('click', function(){
  $('.menu_list').toggleClass('menu_list--active');
})



