class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.x = Math.ceil((this.max + this.min) / 2);
    return this.x;
  }

  lower() {
    this.max = this.x;
  }

  greater() {
    this.min = this.x;
  }
}

module.exports = GuessingGame;
