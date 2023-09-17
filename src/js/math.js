/* eslint no-underscore-dangle: 0 */

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.attack = 100;
    this.stoned = false;
    this.distance = null;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    let damage = this._attack - 10 * (this.distance - 1);
    if (this.stoned) {
      damage -= Math.log2(this.distance) * 5;
    }
    return Math.round(damage);
  }

  set attack(value) {
    this._attack = value;
  }
}
