import { TILE_SIZE, MAP_WIDTH } from "../constants";
import type { Coordinates } from "../types";
import { rectangularCollisionDetection } from "../utils/collisionUtils";
import type Boundary from "./Boundary";

import Sprite, { type SpriteConstructor } from "./Sprite";

interface PlayerConstructor extends SpriteConstructor {
  boundaries?: Boundary[];
  velocity: Coordinates;
  sprites: {
    up: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    down: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    right: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    left: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
  };
}

export default class Player extends Sprite {
  private velocity: Coordinates;
  private direction: string | null;
  private boundaries: Boundary[];
  private nextDirection: string | null;
  private deathSprites?: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
  private isDying: boolean = false;
  private deathAnimationIndex: number = 0;
  private deathAnimationElapsed: number = 0;
  private onDeathAnimationComplete: (() => void) | null = null;
  private sprites: {
    up: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    down: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    right: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    left: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
  };

  constructor({
    boundaries = [],
    velocity = { x: 0, y: 0 },
    sprites,
    deathSprites,
    ...options
  }: PlayerConstructor & { deathSprites?: HTMLImageElement | HTMLCanvasElement | ImageBitmap }) {
    super(options);

    this.velocity = velocity;
    this.direction = "R";
    this.boundaries = boundaries;
    this.nextDirection = null;
    this.sprites = sprites;
    this.deathSprites = deathSprites;
  }

  playDeathAnimation(onComplete: () => void) {
    if (!this.deathSprites) {
      onComplete();
      return;
    }
    this.isDying = true;
    this.deathAnimationIndex = 0;
    this.deathAnimationElapsed = 0;
    this.onDeathAnimationComplete = onComplete;
    this.image = this.deathSprites;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.isDying && this.deathSprites) {
      const spriteSize = 24;

      ctx.drawImage(
        this.deathSprites,
        this.deathAnimationIndex * spriteSize,
        0,
        spriteSize,
        spriteSize,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );

      this.deathAnimationElapsed++;
      if (this.deathAnimationElapsed % 8 === 0) {
        this.deathAnimationIndex++;
        if (this.deathAnimationIndex >= 11) {
          this.isDying = false;
          if (this.onDeathAnimationComplete) {
            this.onDeathAnimationComplete();
          }
        }
      }
      return;
    }

    super.render(ctx);
  }

  update() {
    if (this.isDying) {
      return;
    }

    if (this.nextDirection && this.isAlignedWithGrid()) {
      this.tryChangeDirection();
    }
    if (this.collisionDetected()) {
      this.moving = false;
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.x < -TILE_SIZE) {
      this.position.x = MAP_WIDTH * TILE_SIZE;
    }
    else if (this.position.x > MAP_WIDTH * TILE_SIZE) {
      this.position.x = -TILE_SIZE;
    }
  }

  tryChangeDirection() {
    const originalDirection = this.direction;
    this.direction = this.nextDirection;
    this.updateVelocity();

    if (this.collisionDetected()) {
      this.direction = originalDirection;
      this.updateVelocity();
    } else {
      this.nextDirection = null;
    }
  }

  collisionDetected() {
    for (const boundary of this.boundaries) {
      if (
        rectangularCollisionDetection({
          object1: {
            ...this,
            position: {
              x: this.position.x + this.velocity.x,
              y: this.position.y + this.velocity.y,
            },
          },
          object2: boundary,
        })
      ) {
        return true;
      }
    }
    return false;
  }

  updateVelocity() {
    switch (this.direction) {
      case "U":
        this.image = this.sprites.up;
        this.velocity.x = 0;
        this.velocity.y = -TILE_SIZE / 3;
        break;
      case "L":
        this.image = this.sprites.left;
        this.velocity.x = -TILE_SIZE / 3;
        this.velocity.y = 0;
        break;
      case "D":
        this.image = this.sprites.down;
        this.velocity.x = 0;
        this.velocity.y = TILE_SIZE / 3
        break;
      case "R":
        this.image = this.sprites.right;
        this.velocity.x = TILE_SIZE / 3;
        this.velocity.y = 0;
        break;
    }
  }

  isAlignedWithGrid() {
    return (
      this.position.x % TILE_SIZE === 0 && this.position.y % TILE_SIZE === 0
    );
  }

  setNextDirection(direction: string | null) {
    if (this.isDying) return;
    this.moving = true;
    this.nextDirection = direction;
  }
}
