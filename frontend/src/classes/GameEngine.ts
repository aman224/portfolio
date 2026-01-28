import type Boundary from "./Boundary";
import Player from "./Player";
import Sprite from "./Sprite";

import { MAZE_OFFSET_X, MAZE_OFFSET_Y, TILE_SIZE } from "../constants";
import { generateBoundaries } from "../utils/collisionUtils";

import mazeImageUrl from "/src/assets/PacmanTMP50_Cyan.png";
import pacmanImageRightUrl from "/src/assets/PacmanRight.png";
import pacmanImageLeftUrl from "/src/assets/PacmanLeft.png";
import pacmanImageUpUrl from "/src/assets/PacmanUp.png";
import pacmanImageDownUrl from "/src/assets/PacmanDown.png";

export default class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private boundaries: Boundary[];
  private background!: Sprite;
  private player!: Player;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.boundaries = generateBoundaries();
  }

  async start() {
    const mazeImage = await this.loadImage(mazeImageUrl);
    this.background = new Sprite({
      image: mazeImage,
      position: { x: MAZE_OFFSET_X, y: MAZE_OFFSET_Y },
    });

    const playerSprites = await this.loadPlayerSprites();
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
    window.requestAnimationFrame(this.animate);
    this.background.render(this.ctx);
    // this.boundaries.forEach((boundary) => {
    //   boundary.render(this.ctx);
    // });

    this.player.update();
    this.player.render(this.ctx);
  };

  updatePlayerDirection = (e: KeyboardEvent): void => {
    if (e.key.toLowerCase() === "w") {
      this.player.setNextDirection("U");
    } else if (e.key.toLowerCase() === "a") {
      this.player.setNextDirection("L");
    } else if (e.key.toLowerCase() === "s") {
      this.player.setNextDirection("D");
    } else if (e.key.toLowerCase() === "d") {
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
    const playerImageUp = await this.loadImage(pacmanImageUpUrl);
    const playerImageDown = await this.loadImage(pacmanImageDownUrl);
    const playerImageLeft = await this.loadImage(pacmanImageLeftUrl);
    const playerImageRight = await this.loadImage(pacmanImageRightUrl);

    const sprites = {
      up: playerImageUp,
      down: playerImageDown,
      left: playerImageLeft,
      right: playerImageRight,
    };

    return sprites;
  }

  stop() {
    window.removeEventListener("keydown", this.updatePlayerDirection);
    // Add any other cleanup needed here, e.g. canceling animation frame if we stored the ID
    // Since animFrame ID isn't stored, we rely on component unmounting logic or add a flag
  }
}
