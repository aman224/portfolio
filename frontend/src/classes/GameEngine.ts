import type Boundary from "./Boundary";
import Pellet from "./Pellet";
import Player from "./Player";
import Sprite from "./Sprite";

import { MAZE_OFFSET_X, MAZE_OFFSET_Y, TILE_SIZE } from "../constants";
import { generateBoundaries } from "../utils/collisionUtils";
import { generatePellets } from "../utils/pelletUtils";

import mazeImageUrl from "/src/assets/PacmanTMP50_Cyan.png";
import pacmanImageRightUrl from "/src/assets/PacmanRight.png";
import pacmanImageLeftUrl from "/src/assets/PacmanLeft.png";
import pacmanImageUpUrl from "/src/assets/PacmanUp.png";
import pacmanImageDownUrl from "/src/assets/PacmanDown.png";


export default class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private boundaries: Boundary[];
  private pellets: Pellet[];
  private background!: Sprite;
  private player!: Player;
  private animationId: number;
  private score: number = 0;
  private onScoreChange: ((score: number) => void) | null = null;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.ctx = ctx;
    this.boundaries = generateBoundaries();
    this.pellets = [];
    this.animationId = 0;
  }

  public setScoreCallback(callback: (score: number) => void) {
    this.onScoreChange = callback;
  }

  async start() {
    const [mazeImage, playerSprites] = await Promise.all([
      this.loadImage(mazeImageUrl),
      this.loadPlayerSprites(),
    ]);

    this.pellets = generatePellets();

    this.background = new Sprite({
      image: mazeImage,
      position: { x: MAZE_OFFSET_X, y: MAZE_OFFSET_Y },
    });

    this.player = new Player({
      image: playerSprites.right,
      position: { x: TILE_SIZE + MAZE_OFFSET_X, y: TILE_SIZE + MAZE_OFFSET_Y },
      frames: { max: 2 },
      boundaries: this.boundaries,
      velocity: { x: 0, y: 0 },
      sprites: playerSprites,
    });

    this.configCanvas(
      mazeImage.width + MAZE_OFFSET_X,
      mazeImage.height + MAZE_OFFSET_Y
    );

    this.animate();
  }

  animate = (): void => {
    this.animationId = window.requestAnimationFrame(this.animate);
    this.background.render(this.ctx);



    // this.boundaries.forEach((boundary) => {
    //   boundary.render(this.ctx);
    // });

    // Render pellets and check collision (reverse loop to remove items safely)
    for (let i = this.pellets.length - 1; i >= 0; i--) {
      const pellet = this.pellets[i];
      pellet.render(this.ctx);

      if (
        Math.hypot(
          pellet.position.x - this.player.position.x,
          pellet.position.y - this.player.position.y
        ) <
        pellet.width / 2 + this.player.width / 2
      ) {
        this.pellets.splice(i, 1);
        this.score += pellet.isPowerPellet ? 50 : 10;
        if (this.onScoreChange) {
          this.onScoreChange(this.score);
        }
      }
    }

    this.player.update();
    this.player.render(this.ctx);
  };

  updatePlayerDirection = (e: KeyboardEvent): void => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
    }

    if (e.key.toLowerCase() === "w" || e.key === "ArrowUp") {
      this.player.setNextDirection("U");
    } else if (e.key.toLowerCase() === "a" || e.key === "ArrowLeft") {
      this.player.setNextDirection("L");
    } else if (e.key.toLowerCase() === "s" || e.key === "ArrowDown") {
      this.player.setNextDirection("D");
    } else if (e.key.toLowerCase() === "d" || e.key === "ArrowRight") {
      this.player.setNextDirection("R");
    }
  };

  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      image.onload = () => resolve(image);
      image.onerror = () => reject(image);
    });
  }

  private configCanvas(width: number, height: number) {
    this.canvas.width = width + MAZE_OFFSET_X;
    this.canvas.height = height + MAZE_OFFSET_Y;
  }

  private async loadPlayerSprites() {
    const [
      playerImageUp,
      playerImageDown,
      playerImageLeft,
      playerImageRight
    ] = await Promise.all([
      this.loadImage(pacmanImageUpUrl),
      this.loadImage(pacmanImageDownUrl),
      this.loadImage(pacmanImageLeftUrl),
      this.loadImage(pacmanImageRightUrl)
    ]);

    const sprites = {
      up: playerImageUp,
      down: playerImageDown,
      left: playerImageLeft,
      right: playerImageRight,
    };

    return sprites;
  }

  stop() {
    window.cancelAnimationFrame(this.animationId);
    window.removeEventListener("keydown", this.updatePlayerDirection);
  }
}
