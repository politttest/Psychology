var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 0,
  allowTouchMove: false,
  navigation: {
    nextEl: ".sw-next",
    prevEl: ".sw-prev",
  },
  breakpoints: {
    650: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1300: {
      slidesPerView: 3,
    },
  },
});
// Pagination for serviceSlider
var allSlides = $(".swiper-slide").length;
// $('.ns-total').html(' /'+allSlides);
$(".sw-next").click(function () {
  if (activeSlides == allSlides) {
    activeSlides = allSlides;
  } else {
    activeSlides += 2;
    // $('.ns-active').html(activeSlides);
  }
});
$(".sw-prev").click(function () {
  if (activeSlides == minValueSlide) {
    activeSlides = minValueSlide;
  } else {
    activeSlides -= 2;
    // $('.ns-active').html(activeSlides);
  }
});

// for adaptive
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
variChange($(window).width()); // $(window).width() - ширина экрана
$(window).resize(function () {
  variChange($(window).width());
});

// document.querySelectorAll(".question-answer-list-point").forEach((e, index) => {
//   let accordHeight = e.querySelector(".question-answer-list-point-second-text-container").clientHeight;

//   e.querySelector(".question-answer-list-point-second-text-container").style.height = "0px";

//   e.addEventListener("click", () => {
//     if (document.querySelectorAll(".question-answer-list-point")[index].className == "question-answer-list-point active") {
//       document.querySelectorAll(".question-answer-list-point-main-text-image")[index].src = "img/plus.svg";
//     } else {
//       document.querySelectorAll(".question-answer-list-point-main-text-image")[index].src = "img/minus.svg";
//     }
//     document.querySelectorAll(".question-answer-list-point")[index].classList.toggle("active");

//     if (document.querySelectorAll(".question-answer-list-point")[index].classList.contains("active")) {
//       e.querySelector(".question-answer-list-point-second-text-container").style.height = accordHeight + "px";
//     } else {
//       e.querySelector(".question-answer-list-point-second-text-container").style.height = "0px";
//     }
//   });
// });


document.querySelectorAll(".question-answer-list-point-main-text-container").forEach((e, index) => {
  let containerParent = e.parentNode;
  let accordHeight = containerParent.querySelector(".question-answer-list-point-second-text-container").clientHeight;

  containerParent.querySelector(".question-answer-list-point-second-text-container").style.height = "0px";

  e.addEventListener("click", () => {
    if (document.querySelectorAll(".question-answer-list-point")[index].className == "question-answer-list-point active") {
      document.querySelectorAll(".question-answer-list-point-main-text-image")[index].src = "img/plus.svg";
    } else {
      document.querySelectorAll(".question-answer-list-point-main-text-image")[index].src = "img/minus.svg";
    }
    document.querySelectorAll(".question-answer-list-point")[index].classList.toggle("active");

    if (document.querySelectorAll(".question-answer-list-point")[index].classList.contains("active")) {
      containerParent.querySelector(".question-answer-list-point-second-text-container").style.height = accordHeight + "px";
    } else {
      containerParent.querySelector(".question-answer-list-point-second-text-container").style.height = "0px";
    }
  });
});