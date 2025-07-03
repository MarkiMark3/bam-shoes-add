import gsap from "gsap";
import Gallery from "../js/gallery";
import { transitionToScene3, videoPosition } from "./scene3";
import { logSceneChange } from "./utils";

const titleTL = gsap.timeline({ repeat: -1, yoyo: true });

gsap.to(".scene2-button", {
  scale: 1.05,
  duration: 0.8,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

function transitionToScene2() {
  gsap.to(".swiper", {
    scale: 4.5,
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      document.querySelector(".scene2").style.display = "none";
    },
  });
  gsap.to(".scene2", {
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
  });
}

titleTL
  .to(".scene2-title", { color: "orange", duration: 1, ease: "power1.inOut" })
  .to(".scene2-title", { color: "yellow", duration: 1, ease: "power1.inOut" });

window.addEventListener("DOMContentLoaded", () => {
  new Gallery(".gallery-swiper", ({ altText }) => {
    transitionToScene2();
    videoPosition(altText);
    logSceneChange("Video");
    transitionToScene3();
    document.querySelector(".scene3-video").play();
  });
});
