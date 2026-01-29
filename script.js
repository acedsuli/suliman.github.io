let music = new Audio("star.mp3");

function playMusic() {
  music.loop = true;
  music.volume = 0.5;
  music.play();
}
