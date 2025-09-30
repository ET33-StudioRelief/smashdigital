import 'swiper/css/bundle';

import Swiper from 'swiper/bundle';

export function swiperPartners() {
  new Swiper('.swiper.is-partenaires', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 2000,
  });
}

export function swiperRisque(): void {
  new Swiper('.swiper.is-risque', {
    effect: 'fade',
    /* crossfade: true, */
    direction: 'horizontal',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragClass: 'swiper-drag',
    },
    createElements: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.swiper-right.is-risque',
      prevEl: '.swiper-left.is-risque',
    },
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 2000,
  });
}

export function swiperReferences(): void {
  new Swiper('.swiper.is-references', {
    direction: 'horizontal',
    createElements: true,
    mousewheel: {
      forceToAxis: true,
    },
    slideToClickedSlide: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: -100,
    speed: 2000,
  });
}

export function swiperUseCase(): void {
  new Swiper('.swiper.is-uc', {
    direction: 'horizontal',
    /* pagination: true, */
    navigation: {
      nextEl: '.swiper-right',
      prevEl: '.swiper-left',
    },
    loop: true,
    createElements: true,
    autoHeight: true,
    mousewheel: {
      forceToAxis: true,
    },
    slideToClickedSlide: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: '20rem',
    speed: 1000,
  });
}

export function swiperTeam(): void {
  new Swiper('.swiper.is-team', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 8000,
  });
}
