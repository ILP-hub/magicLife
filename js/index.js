const swiper = document.querySelector('.swiper').swiper;

let slider = new Swiper(".swiper", {

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      speed:300,
      effect: "fade",
      mousewheel: true,
    });
  
