window.addEventListener("DOMContentLoaded", () => {
  console.log("ad_load");
  logSceneChange("Intro");
});
window.addEventListener("resize", () => {
  console.log("window_resize");
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    console.log("page_hide");
  }
});

document.querySelector(".scene2-button")?.addEventListener("click", () => {
  console.log("user_interaction:cta_click");
});

export const logSceneChange = (sceneName) => {
  console.log(`scene_change:${sceneName}`);
};

function isMobile() {
  return window.innerWidth <= 1000;
}

function checkOrientation() {
  if (isMobile() && window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById("orientation-lock").style.display = "flex";
    document.getElementById("main").style.display = "none";
  } else {
    document.getElementById("orientation-lock").style.display = "none";
    document.getElementById("main").style.display = "block";
  }
}

window.addEventListener("load", checkOrientation);

window.addEventListener("orientationchange", checkOrientation);

window.addEventListener("resize", checkOrientation);
