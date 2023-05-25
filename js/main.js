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
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
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

var activeSlides;
var minValueSlide;
function variChange(winWidth) {
  if (winWidth > 1300) {
    activeSlides = 8;
    minValueSlide = 8;
  }
  if (winWidth <= 1300 && winWidth > 992) {
    activeSlides = 6;
    minValueSlide = 6;
    // $('.ns-active').html(activeSlides);
  }
  if (winWidth <= 992 && winWidth > 650) {
    activeSlides = 4;
    minValueSlide = 4;
    // $('.ns-active').html(activeSlides);
  }
  if (winWidth <= 650 && winWidth > 0) {
    activeSlides = 2;
    minValueSlide = 2;
    // $('.ns-active').html(activeSlides);
  }
}
variChange(window.innerWidth);
document.addEventListener("resize", function () {
  variChange(window.innerWidth);
})

document.querySelectorAll(".question-answer-list-point-main-text-container").forEach((e, index) => {
  let containerParent = e.parentNode;
  let accordHeight = containerParent.querySelector(".question-answer-list-point-second-text-container").clientHeight;

  containerParent.querySelector(".question-answer-list-point-second-text-container").style.height = "0px";

  e.addEventListener("click", () => {
    e.querySelectorAll(".question-answer-list-point-main-button-span")[1].classList.toggle("active")
    document.querySelectorAll(".question-answer-list-point")[index].classList.toggle("active");
    if (document.querySelectorAll(".question-answer-list-point")[index].classList.contains("active")) {
      containerParent.querySelector(".question-answer-list-point-second-text-container").style.height = accordHeight + "px";
    } else {
      containerParent.querySelector(".question-answer-list-point-second-text-container").style.height = "0px";
    }
  });
});
