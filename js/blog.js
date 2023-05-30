document.querySelectorAll(".blog-menu-list-point-main-text-container").forEach((e, index) => {
  let containerParent = e.parentNode;
  let accordHeight = containerParent.querySelector(".blog-menu-list-point-second-text-container").clientHeight;
  containerParent.querySelector(".blog-menu-list-point-second-text-container").style.height = "0px";
  e.addEventListener("click", () => {
    e.querySelector(".blog-menu-list-point-main-text-image").classList.toggle("active");
    document.querySelectorAll(".blog-menu-list-point")[index].classList.toggle("active");
    if (document.querySelectorAll(".blog-menu-list-point")[index].classList.contains("active")) {
      containerParent.querySelector(".blog-menu-list-point-second-text-container").style.height = accordHeight + "px";
    } else {
      containerParent.querySelector(".blog-menu-list-point-second-text-container").style.height = "0px";
    }
  });
});

document.querySelector(".blog-main-mobile-in-button").addEventListener("click", () => {
  document.querySelector(".blog-main-mobile-content").style.margin = "0 0 0 600px"
  setTimeout(() => {
    document.querySelector(".blog-main-mobile-content").classList.toggle("active");
    document.querySelector(".blog-main-mobile-content").style.margin = "0"
  }, 200);
});

document.querySelector(".blog-main-mobile-button").addEventListener("click", () => {
  document.querySelector(".blog-main-mobile-content").classList.toggle("active");
});

document.querySelectorAll(".blog-main-mobile-list-point-main-text-container").forEach((e, index) => {
  let containerParent = e.parentNode;
  // let accordHeight = containerParent.querySelector(".blog-main-mobile-list-point-second-text-container").clientHeight;
  // containerParent.querySelector(".blog-main-mobile-list-point-second-text-container").style.height = "0px";
  e.addEventListener("click", () => {
    e.querySelector(".blog-main-mobile-list-point-main-text-image").classList.toggle("active");
    document.querySelectorAll(".blog-main-mobile-list-point")[index].classList.toggle("active");
    document.querySelectorAll(".blog-main-mobile-list-point-second-text-container")[index].classList.toggle("active");
    //   if (document.querySelectorAll(".blog-main-mobile-list-point")[index].classList.contains("active")) {
    //     containerParent.querySelector(".blog-main-mobile-list-point-second-text-container").style.height = accordHeight + "px";
    //   } else {
    //     containerParent.querySelector(".blog-main-mobile-list-point-second-text-container").style.height = "0px";
    //   }
  });
});
