let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("nav").classList.remove("nav-hidden");
  } else {
    document.querySelector("nav").classList.add("nav-hidden");
  }
  prevScrollpos = currentScrollPos;
};
