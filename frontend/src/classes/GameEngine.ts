import type Boundary from "./Boundary";
import Pellet from "./Pellet";
import Player from "./Player";
import Ghost from "./Ghost";
import Sprite from "./Sprite";

import { MAZE_OFFSET_X, MAZE_OFFSET_Y, TILE_SIZE } from "../constants";
import { generateBoundaries } from "../utils/collisionUtils";
import { generatePellets } from "../utils/pelletUtils";

import mazeImageUrl from "/src/assets/PacmanTMP50_Cyan.png";
import pacmanImageUrl from "/src/assets/Pacman.png";

import ghostImageUrl from "/src/assets/Ghost.png";


import { ghostCollisions } from "../data/ghost_collisions";

export default class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private boundaries: Boundary[];
  private ghostBoundaries: Boundary[];
  private pellets: Pellet[];
  private background!: Sprite;
  private player!: Player;
  private ghosts: Ghost[] = [];
  private animationId: number;
  private score: number = 0;
  private onScoreChange: ((score: number) => void) | null = null;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.ctx = ctx;
    this.boundaries = generateBoundaries();
    this.ghostBoundaries = generateBoundaries(ghostCollisions);
    this.pellets = [];
    this.animationId = 0;
  }

  public setScoreCallback(callback: (score: number) => void) {
    this.onScoreChange = callback;
  }

  async start() {
    const [mazeImage, playerSprites, ghostSpritesList] = await Promise.all([
      this.loadImage(mazeImageUrl),
      this.loadPlayerSprites(),
      this.loadGhostSprites(),
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

    this.ghosts = ghostSpritesList.map((ghostSprites, index) => {
      const row = Math.floor(index / 2);
      const col = index % 2;

      const spawnX = (57 + col * 6) * TILE_SIZE + MAZE_OFFSET_X;
      const spawnY = (12 + row * 2) * TILE_SIZE + MAZE_OFFSET_Y;

      const ghost = new Ghost({
        image: ghostSprites.right,
        frames: { max: 2 },
        position: {
          x: spawnX,
          y: spawnY
        },
        velocity: { x: 0, y: 0 },
        boundaries: this.ghostBoundaries,
        sprites: ghostSprites,
        speed: 1.5,
        startDelay: 3000
      });

      const safeExitX = 60 * TILE_SIZE + MAZE_OFFSET_X;
      const exitY = 11 * TILE_SIZE + MAZE_OFFSET_Y;

      ghost.setWaypoints([
        { x: safeExitX, y: spawnY },
        { x: safeExitX, y: exitY }
      ]);

      return ghost;
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

    this.ghosts.forEach(ghost => {
      ghost.update();
      ghost.render(this.ctx);
    });
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
    const image = await this.loadImage(pacmanImageUrl);

    const cols = 8;
    const spriteWidth = image.width / cols;
    const spriteHeight = image.height; // Single row

    // Right: cols 0,1
    // Left: cols 2,3
    // Up: cols 4,5
    // Down: cols 6,7
    const [right, left, up, down] = await Promise.all([
      createImageBitmap(image, 0 * spriteWidth, 0, 2 * spriteWidth, spriteHeight),
      createImageBitmap(image, 2 * spriteWidth, 0, 2 * spriteWidth, spriteHeight),
      createImageBitmap(image, 4 * spriteWidth, 0, 2 * spriteWidth, spriteHeight),
      createImageBitmap(image, 6 * spriteWidth, 0, 2 * spriteWidth, spriteHeight)
    ]);

    const sprites = {
      up,
      down,
      left,
      right,
    };

    return sprites;
  }

  private async loadGhostSprites() {
    const image = await this.loadImage(ghostImageUrl);

    // Updated to 4 rows for 4 ghosts
    const rows = 4;
    const cols = 8;
    const spriteWidth = image.width / cols;
    const spriteHeight = image.height / rows;

    const ghostSets = [];

    for (let i = 0; i < rows; i++) {
      // Row i
      // Right: cols 0,1
      // Left: cols 2,3
      // Up: cols 4,5
      // Down: cols 6,7

      // Use createImageBitmap to slice. It should be available in browser env.
      // Input: (image, sx, sy, sw, sh)
      const [right, left, up, down] = await Promise.all([
        createImageBitmap(image, 0 * spriteWidth, i * spriteHeight, 2 * spriteWidth, spriteHeight),
        createImageBitmap(image, 2 * spriteWidth, i * spriteHeight, 2 * spriteWidth, spriteHeight),
        createImageBitmap(image, 4 * spriteWidth, i * spriteHeight, 2 * spriteWidth, spriteHeight),
        createImageBitmap(image, 6 * spriteWidth, i * spriteHeight, 2 * spriteWidth, spriteHeight)
      ]);

      ghostSets.push({ right, left, up, down });
    }

    return ghostSets;
  }

  stop() {
    window.cancelAnimationFrame(this.animationId);
    window.removeEventListener("keydown", this.updatePlayerDirection);
  }
}
