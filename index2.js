// Mobile Menu Toggle
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button"); // lowercase "close"

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Swiper Carousel
const swiper = new Swiper('.swiper', {
  direction: 'horizontal', // 'vertical' is possible, but usually horizontal is standard
  loop: true,
  grabCursor: true, // fixed typo: 'grapCursor' ➜ 'grabCursor'
  spaceBetween: 25,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
