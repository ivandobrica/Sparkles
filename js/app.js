//hamburger action
let body = document.querySelector("body");
let hamburger = document.querySelector(".hamburger"),
    link = document.querySelector(".overlay__item"),
    overlay = document.querySelector(".overlay"),
    openIcon = document.querySelector(".fa-bars"),
    closeIcon = document.querySelector(".fa-times"),
    overlayAction = [hamburger, link];
for(let i = 0; i < overlayAction.length; i++) {
  overlayAction[i].addEventListener("click", function () {
    overlay.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  })
};


let toTopBtn = document.querySelector(".scroll-btn");
function scrollToTop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    toTopBtn.style.visibility = "visible";
    toTopBtn.style.opacity = "1";
  } else {
    toTopBtn.style.visibility = "hidden";
    toTopBtn.style.opacity = "0";
  }
}
window.onscroll = function() {
  scrollToTop()
};
toTopBtn.addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});