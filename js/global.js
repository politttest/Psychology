let headerMobileArrHeights = [];
let headerMobileHeight = 0;

document.querySelectorAll(".header-burger-list-point-main-text-container").forEach((e, index) => {
  let containerParent = e.parentNode;
  let accordHeight = containerParent.querySelector(".header-burger-list-point-second-text-container").clientHeight.toString();
  headerMobileArrHeights.push(accordHeight);

  containerParent.querySelector(".header-burger-list-point-second-text-container").style.height = "0px";

})

headerMobileHeight = document.querySelector(".header-burger-content").clientHeight;
document.querySelector(".header-burger-content").style.height = "0";
document.querySelector(".header-burger-content").style.padding = "0";

document.querySelector(".header-burger-button").addEventListener("click", (e) => {
  if (document.querySelector(".header-burger-button").className == "header-burger-button") {
    document.getElementsByClassName("header-burger-button").className = "header-burger-button active"
    console.log("awdadw111")
    document.querySelector(".header-burger-content").style.height = headerMobileHeight + "px";
    console.log("awdadw222")
    document.querySelector(".header-burger-content").style.padding = "0 0 20px 0";
    console.log("wadawd")
    
  } else {
    document.querySelector(".header-burger-content").style.height = 0;
    document.querySelector(".header-burger-content").style.padding = 0;
    document.getElementsByClassName("header-burger-button").className = "header-burger-button"
  }
});

document.querySelectorAll(".footer-mobile-list-point-main-text-container").forEach((e, index) => {
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

  e.addEventListener("click", () => {
    // document.querySelectorAll(".header-burger-list-point-second-text-container")[index].classList.toggle("active");
    document.querySelectorAll(".header-burger-list-point-main-text-image")[index].classList.toggle("active");
    if (!document.querySelectorAll(".header-burger-list-point")[index].classList.contains("active")) {
      e.parentNode.querySelector(".header-burger-list-point-second-text-container").style.height = headerMobileArrHeights[index] + "px";
      document.querySelectorAll(".header-burger-list-point")[index].classList.toggle("active")
    } else {
      e.parentNode.querySelector(".header-burger-list-point-second-text-container").style.height = "0px";
      document.querySelectorAll(".header-burger-list-point")[index].classList.toggle("active")
    }
  });
});

document.querySelector(".header-burger-button").addEventListener("click", () => {
  document.querySelector(".header-burger-button").classList.toggle("active");
  document.querySelector(".header").classList.toggle("burger-active");
});

Fancybox.bind("[data-fancybox]", {});
