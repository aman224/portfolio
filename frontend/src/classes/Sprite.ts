import type { Coordinates } from "../types";

export interface SpriteConstructor {
  image?: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
  position: Coordinates;
  frames?: { max: number };
}

export default class Sprite {
  protected image?: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
  public position: Coordinates;
  private frames: { max: number; val: number; elapsed: number };
  public moving: boolean = false;
  public width: number = 0;
  public height: number = 0;

  constructor({ image, position, frames = { max: 1 } }: SpriteConstructor) {
    this.image = image;
    this.position = position;
    this.frames = { ...frames, val: 0, elapsed: 0 };

    if (this.image) {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    }
    this.moving = false;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.image) return;

    ctx.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    );

    if (!this.moving) return;

    if (this.frames.max > 1) {
      this.frames.elapsed++;
    }

    if (this.frames.elapsed % 10 === 0) {
      if (this.frames.val < this.frames.max - 1) {
        this.frames.val++;
      } else {
        this.frames.val = 0;
      }
    }
  }

  getImageWidth() {
    return this.image?.width || 0;
  }

  getImageHeight() {
    return this.image?.height || 0;
  }

  getFrameWidth() {
    return this.width;
  }

  getFrameHeight() {
    return this.height;
  }

  x() {
    return this.position.x;
  }

  y() {
    return this.position.y;
  }
}
