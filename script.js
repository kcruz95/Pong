import Ball from './ball.js'
import Paddle from './paddle.js'

const ball = new Ball(document.getElementById("ball"));
const playerPaddle = new Paddle(document.getElementById("player-paddle"));
const computerPaddle = new Paddle(document.getElementById("computer-paddle"));

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime //determines how much time elapsed between frames
    // update the code
    // console.log(delta);
    // ball.update(delta);
    // ln 11 makes the ball move around
    computerPaddle.update(delta, ball.y);
  }
  lastTime = time
  // console.log(time);
  window.requestAnimationFrame(update)
  // creates an infinite loop to update the ball position
}

document.addEventListener("mousemove", e => {
  playerPaddle.position = e.y / window.innerHeight * 100;
});

window.requestAnimationFrame(update)