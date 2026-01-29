const button = document.getElementById("musicBtn");
const music = new Audio("star.mp3");

let playing = false;

button.addEventListener("click", () => {
  if (!playing) {
    music.play();
    button.textContent = "pause music";
  } else {
    music.pause();
    button.textContent = "play music";
  }
  playing = !playing;
});
