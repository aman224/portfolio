import Sprite, { type SpriteConstructor } from "./Sprite";

interface PelletConstructor extends SpriteConstructor {
  isPowerPellet?: boolean;
}

export default class Pellet extends Sprite {
  public isPowerPellet: boolean;

  constructor({ isPowerPellet = false, ...options }: PelletConstructor) {
    super(options);

    this.isPowerPellet = isPowerPellet;
  }
}
