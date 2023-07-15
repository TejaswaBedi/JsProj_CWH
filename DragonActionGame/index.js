let score = 0;
let cross = true;
let audio = new Audio("music.mp3");
let audioGameOver = new Audio("gameover.mp3");

setTimeout(() => {
  audio.play();
}, 1000);

document.onkeydown = function (event) {
  console.log(event.key);
  if (event.key === "ArrowUp") {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  }
  if (event.key === "ArrowLeft") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX - 112 + "px";
  }
  if (event.key === "ArrowRight") {
    dino = document.querySelector(".dino");
    dinoX = parseInt(
      window.getComputedStyle(dino, null).getPropertyValue("left")
    );
    dino.style.left = dinoX + 112 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));
  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  if (offsetX < 113 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove("obstacleAni");
    dino.style.bottom = "-200px";
    audioGameOver.play();
    setTimeout(() => {
      audioGameOver.pause();
      audio.pause();
    }, 1000);
    return;
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateCount(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(dino, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);

function updateCount(score) {
  scoreCount.innerHTML = "Your Score: " + score;
}
