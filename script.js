/* ---------- MUSIC ---------- */
const button = document.getElementById("musicBtn");
const music = new Audio("star.mp3");

let playing = false;

button.addEventListener("click", () => {
  if (!playing) {
    music.play();
    button.textContent = "pause music";
  } else {
    music.pause();
    button.textContent = "press this for music";
  }
  playing = !playing;
});

/* ---------- WIGGLE + PRESS ANIMS ---------- */
const wiggleElements = document.querySelectorAll("h1, p, button");

wiggleElements.forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.classList.add("wiggling");
  });

  el.addEventListener("mouseleave", () => {
    el.classList.remove("wiggling");
    el.classList.remove("pressed");
  });

  el.addEventListener("mousedown", () => {
    el.classList.add("pressed");
  });

  el.addEventListener("mouseup", () => {
    el.classList.remove("pressed");
  });
});
