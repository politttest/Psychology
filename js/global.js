console.log("wadwda");
document.querySelectorAll(".footer-mobile-list-point-main-text-container").forEach((e, index) => {
  console.log("2awdwad");
  let containerParent = e.parentNode;
  let accordHeight = containerParent.querySelector(".footer-mobile-list-point-second-text-container").clientHeight;

  containerParent.querySelector(".footer-mobile-list-point-second-text-container").style.height = "0px";

  e.addEventListener("click", () => {
    document.querySelectorAll(".footer-mobile-list-point")[index].classList.toggle("active");
    document.querySelectorAll(".footer-mobile-list-point-main-text-image")[index].classList.toggle("active");
    if (document.querySelectorAll(".footer-mobile-list-point")[index].classList.contains("active")) {
      containerParent.querySelector(".footer-mobile-list-point-second-text-container").style.height = accordHeight + "px";
    } else {
      containerParent.querySelector(".footer-mobile-list-point-second-text-container").style.height = "0px";
    }
  });
});

document.querySelectorAll(".header-burger-list-point-main-text-container").forEach((e, index) => {
  // let containerParent = e.parentNode;
  // let accordHeight = containerParent.querySelector(".header-burger-list-point-second-text-container").clientHeight;

  // containerParent.querySelector(".header-burger-list-point-second-text-container").style.height = "0px";

  e.addEventListener("click", () => {
    document.querySelectorAll(".header-burger-list-point-second-text-container")[index].classList.toggle("active");
    document.querySelectorAll(".header-burger-list-point-main-text-image")[index].classList.toggle("active");
    // if (document.querySelectorAll(".header-burger-list-point")[index].classList.contains("active")) {
    //   containerParent.querySelector(".header-burger-list-point-second-text-container").style.height = accordHeight + "px";
    // } else {
    //   containerParent.querySelector(".header-burger-list-point-second-text-container").style.height = "0px";
    // }
  });
});

document.querySelector(".header-burger-button").addEventListener("click", () => {
  document.querySelector(".header-burger-button").classList.toggle("active");
  document.querySelector(".header").classList.toggle("burger-active");
});

Fancybox.bind("[data-fancybox]", {});
