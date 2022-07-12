import Ball from './ball.js'

const ball = new Ball(document.getElementById("ball"));

let lastTime
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime //determines how much time elapsed between frames
    // update the code
    // console.log(delta);
    ball.update(delta);
  }
  lastTime = time
  // console.log(time);
  window.requestAnimationFrame(update)
  // creates an infinite loop to update the ball position
}

window.requestAnimationFrame(update)