const hamburger = document.querySelector(".hamburger");
const navBarList = document.querySelector(".nav_bar-list");
const imgHover = document.getElementById("img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBarList.classList.toggle("active");
});

imgHover.addEventListener("onmouseout", () => {});
