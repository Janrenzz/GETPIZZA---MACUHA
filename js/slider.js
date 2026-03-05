document.addEventListener("DOMContentLoaded", () => {
  if (typeof tns !== "function") {
    console.error("Tiny Slider not loaded. Check the tiny-slider.js script tag.");
    return;
  }

  const sliderEl = document.querySelector(".testimonialSlider");
  if (!sliderEl) return;

  tns({
    container: sliderEl,
    items: 1,
    slideBy: 1,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayButtonOutput: false,
    controls: false, // no arrows
    nav: false,      // no dots
    mouseDrag: true,
    gutter: 0,
    loop: true
  });
});