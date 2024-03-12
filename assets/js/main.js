var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    767: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
   
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
      
    992: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
