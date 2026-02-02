import Sprite, { type SpriteConstructor } from "./Sprite";

interface PelletConstructor extends SpriteConstructor {
  isPowerPellet?: boolean;
}

export default class Pellet extends Sprite {
  public isPowerPellet: boolean;

  constructor({ isPowerPellet = false, ...options }: PelletConstructor) {
    super(options);

    this.isPowerPellet = isPowerPellet;

    if (!options.image) {
      this.width = 6;
      this.height = 6;
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.image) {
      super.render(ctx);
    } else {
      ctx.fillStyle = this.isPowerPellet ? "#fab9b0" : "#fab9b0"; // Using standard pellet color (pinkish-white)

      const centerX = this.position.x + 3;
      const centerY = this.position.y + 3;

      if (this.isPowerPellet) {
        const shouldDraw = Math.floor(Date.now() / 200) % 2 === 0;

        if (shouldDraw) {
          ctx.fillRect(centerX - 7, centerY - 2, 14, 4);
          ctx.fillRect(centerX - 2, centerY - 7, 4, 14);
          ctx.fillRect(centerX - 5, centerY - 5, 10, 10);
        }
      } else {
        const size = 3;
        ctx.fillRect(centerX - size / 2, centerY - size / 2, size, size);
      }
    }
  }
}
