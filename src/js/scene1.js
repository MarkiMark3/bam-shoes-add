import gsap from "gsap";
import { logSceneChange } from "./utils";

const shoesTL = gsap.timeline();

function exitIntroScene() {
  gsap.to(".scene1", {
    scale: 4.5,
    opacity: 0,
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
      document.querySelector(".scene1").style.display = "none";
      logSceneChange("gallery");
    },
  });

  gsap.to(".scene2", {
    opacity: 1,
    y: 10,
    duration: 3,
    ease: "power2.inOut",
    delay: 1,
    display: "flex",
  });
}

gsap.from(".scene1-bubble-img", {
  opacity: 0,
  scale: 0.5,
  duration: 2,
  delay: 4.4,
  stagger: 0.5,
  ease: "power2.out",
});

if (window.matchMedia("(min-width: 850px)").matches) {
  shoesTL
    .to(".scene1-bubble-img", {
      x: -250,
      duration: 3,
      delay: 4,
      ease: "power1.inOut",
    })
    .to(".scene1-bubble-img", {
      x: 3000,
      duration: 5,
      ease: "power2.inOut",
    });
} else {
  shoesTL
    .to(".scene1-bubble-img", {
      y: 150,
      duration: 3,
      delay: 4,
      ease: "power1.inOut",
    })
    .to(".scene1-bubble-img", {
      y: -3000,
      duration: 5,
      ease: "power2.inOut",
    });
}

gsap.to(".scene1-title-word", {
  color: "red",
  duration: 1,
  delay: 4.3,
  stagger: 0.5,
  ease: "power1.inOut",
});

gsap.set(".scene1-title-word--1", { x: "-20vw", y: "-5vh", opacity: 1 });
gsap.set(".scene1-title-word--2", { x: "25vw", y: "-5vh", opacity: 1 });
gsap.set(".scene1-title-word--3", { x: "-10vw", y: "-5vh", opacity: 1 });
gsap.set(".scene1-title-word--4", { x: "20vw", y: "0vh", opacity: 1 });

gsap.matchMedia().add("(min-width: 850px)", () => {
  gsap.set(".scene1-title-word--1", { x: "-30vw", y: "15vh", opacity: 1 });
  gsap.set(".scene1-title-word--2", { x: "-10vw", y: "10vh", opacity: 1 });
  gsap.set(".scene1-title-word--3", { x: "10vw", y: "5vh", opacity: 1 });
  gsap.set(".scene1-title-word--4", { x: "25vw", y: "-5vh", opacity: 1 });
});

gsap.from(".scene1-title-word", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1,
  stagger: 0.5,
  ease: "power2.out",
});

if (window.matchMedia("(min-width: 850px)").matches) {
  gsap.to(".scene1-title-word--1", {
    x: -250,
    y: 150,
    opacity: 1,
    delay: 4.1,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.to(".scene1-title-word--2", {
    x: 230,
    y: -35,
    opacity: 1,
    duration: 1.5,
    delay: 4.2,
    ease: "power3.out",
  });

  gsap.to(".scene1-title-word--3", {
    x: 80,
    y: -50,
    opacity: 1,
    duration: 1.5,
    delay: 4.3,
    ease: "power3.out",
  });

  gsap.to(".scene1-title-word--4", {
    x: 10,
    y: -80,
    opacity: 1,
    duration: 1.5,
    delay: 4.4,
    ease: "power3.out",
  });
} else {
  gsap.to(".scene1-title-word--1", {
    x: -80,
    y: 60,
    opacity: 1,
    delay: 4.1,
    duration: 1.5,
    ease: "power3.out",
  });

  gsap.to(".scene1-title-word--2", {
    x: 130,
    y: -35,
    opacity: 1,
    duration: 1.5,
    delay: 4.2,
    ease: "power3.out",
  });

  gsap.to(".scene1-title-word--3", {
    x: 80,
    y: -50,
    opacity: 1,
    duration: 1.5,
    delay: 4.3,
    ease: "power3.out",
  });
  gsap.to(".scene1-title-word--4", {
    x: 30,
    y: -60,
    opacity: 1,
    duration: 1.5,
    delay: 4.4,
    ease: "power3.out",
  });
}

setTimeout(() => {
  exitIntroScene();
}, 8000);
