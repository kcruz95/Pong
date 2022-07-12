const SPEED = .02;
// w/out ln 1 & ln 18, the PC paddle will forever match the ball and be impossible to defeat

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
  };

  get position() {
    return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
  };

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  };

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  };
};