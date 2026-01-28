import { TILE_SIZE } from "../constants";
import type { Coordinates } from "../types";

export default class Boundary {
  static width = TILE_SIZE;
  static height = TILE_SIZE;

  private position: Coordinates;
  public width: number;
  public height: number;

  constructor(position: Coordinates) {
    this.position = position;
    this.width = TILE_SIZE;
    this.height = TILE_SIZE;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  x() {
    return this.position.x;
  }

  y() {
    return this.position.y;
  }
}
