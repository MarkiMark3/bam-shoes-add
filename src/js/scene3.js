import gsap from "gsap";

export function videoPosition(pos) {
  switch (pos) {
    case "shoe2":
      document.querySelector(".scene3").style.justifyContent = "end";
      document.querySelector(".scene3").style.flexDirection = "row-reverse";
      break;
    case "shoe3":
      document.querySelector(".scene3").style.justifyContent = "start";
      document.querySelector(".scene3").style.alignItems = "flex-end";
      break;
    case "shoe4":
      document.querySelector(".scene3").style.justifyContent = "end";
      document.querySelector(".scene3").style.alignItems = "flex-end";
      document.querySelector(".scene3").style.flexDirection = "row-reverse";
      break;
    default:
      break;
  }
}

export function transitionToScene3() {
  gsap.set(".scene3", { display: "flex" });

  gsap.from(".scene3", {
    opacity: 0,
    delay: 1.5,
    duration: 2,
    ease: "power2.inOut",
  });
}
