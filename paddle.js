const SPEED = .02;
// w/out ln 1 & ln 18, the PC paddle will forever match the ball and be impossible to defeat

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
    // resets paddle to original positions after scoring
  };

  get position() {
    return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
  };

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  };

  rect() {
    return this.paddleElem.getBoundingClientRect()
  };

  reset() {
    this.position = 50
  };

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  };
};