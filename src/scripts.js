//carrousel horizontal movement

const carousel = document.querySelector("#default-carousel");
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5; //scroll-slower
  carousel.scrollLeft = scrollLeft - walk;
});

// Touch events for mobile devices
carousel.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchend", () => {
  isDown = false;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5; //scroll-slower
  carousel.scrollLeft = scrollLeft - walk;
});


if (window.matchMedia("(max-width: 640px)").matches) {
  //header vertical movement
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("Sec-Header").style.bottom = "0";
    } else {
      document.getElementById("Sec-Header").style.bottom = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
}