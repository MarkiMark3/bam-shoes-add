import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default class Gallery {
  constructor(selector, onSlideClick) {
    this.swiper = new Swiper(selector, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
    });

    document.querySelectorAll(`${selector} .swiper-slide`).forEach((slide) => {
      slide.addEventListener("click", () => {
        const img = slide.querySelector("img");
        const altText = img?.getAttribute("alt");
        console.log(`user_interaction:slide_click:${altText}`);
        onSlideClick({ altText });
      });
    });
  }
}
