var swiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    slidesPerColumn: 2,
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      nextEl: ".sw-next",
      prevEl: ".sw-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      450: {
        slidesPerView: 3,
      },
      650: {
        slidesPerView: 4,
      },
    },
  });
  var allSlides = document.querySelector(".swiper-slide").length;
  document.querySelector(".sw-next").addEventListener("click", () => {
    if (activeSlides == allSlides) {
      activeSlides = allSlides;
    } else {
      activeSlides += 2;
    }
  })
  document.querySelector(".sw-prev").addEventListener("click", () => {
    if (activeSlides == minValueSlide) {
      activeSlides = minValueSlide;
    } else {
      activeSlides -= 2;
    }
  })
  