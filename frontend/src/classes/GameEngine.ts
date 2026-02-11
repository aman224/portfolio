import type Boundary from "./Boundary";
import Pellet from "./Pellet";
import Player from "./Player";
import Ghost from "./Ghost";
import Sprite from "./Sprite";

import { MAZE_OFFSET_X, MAZE_OFFSET_Y, TILE_SIZE } from "../constants";
import { generateBoundaries } from "../utils/collisionUtils";
import { generatePellets } from "../utils/pelletUtils";

import mazeImageUrl from "/src/assets/Maze_V2.png";
import pacmanImageUrl from "/src/assets/Pacman.png";
import pacmanDyingUrl from "/src/assets/PacmanDying.png";

import ghostImageUrl from "/src/assets/Ghost.png";


export default class GameEngine {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private boundaries: Boundary[];
  private pellets: Pellet[];
  private background!: Sprite;
  private player!: Player;
  private ghosts: Ghost[] = [];
  private animationId: number;
  private score: number = 0;
  private lives: number = 2;
  private onScoreChange: ((score: number) => void) | null = null;
  private onLivesChange: ((lives: number) => void) | null = null;
  private playerSprites: any;
  private deathSprites: any;
  private ghostSpritesList: any[] = [];
  private isDying: boolean = false;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.boundaries = generateBoundaries();
    this.pellets = [];
    this.animationId = 0;
  }

  public setScoreCallback(callback: (score: number) => void) {
    this.onScoreChange = callback;
  }

  public setLivesCallback(callback: (lives: number) => void) {
    this.onLivesChange = callback;
  }

  async start() {
    const [mazeImage, playerSprites, ghostSpritesList, deathSprites] = await Promise.all([
      this.loadImage(mazeImageUrl),
      this.loadPlayerSprites(),
      this.loadGhostSprites(),
      this.loadImage(pacmanDyingUrl)
    ]);

    this.playerSprites = playerSprites;
    this.ghostSpritesList = ghostSpritesList;
    this.deathSprites = deathSprites;

    this.pellets = generatePellets();

    this.background = new Sprite({
      image: mazeImage,
      position: { x: MAZE_OFFSET_X, y: MAZE_OFFSET_Y },
    });

    this.initEntities();

    this.configCanvas(
      mazeImage.width + MAZE_OFFSET_X,
      mazeImage.height + MAZE_OFFSET_Y
    );

    this.animate();
  }

  private initEntities() {
    this.player = new Player({
      image: this.playerSprites.right,
      position: { x: TILE_SIZE + MAZE_OFFSET_X, y: TILE_SIZE + MAZE_OFFSET_Y },
      frames: { max: 2 },
      boundaries: this.boundaries,
      velocity: { x: 0, y: 0 },
      sprites: this.playerSprites,
      deathSprites: this.deathSprites
    });

    this.ghosts = this.ghostSpritesList.map((ghostSprites, index) => {
      const row = Math.floor(index / 2);
      const col = index % 2;

      const spawnX = (99 + col * 6) * TILE_SIZE + MAZE_OFFSET_X;
      const spawnY = (6 + row * 2) * TILE_SIZE + MAZE_OFFSET_Y;

      const ghost = new Ghost({
        image: ghostSprites.right,
        frames: { max: 2 },
        position: {
          x: spawnX,
          y: spawnY
        },
        velocity: { x: 0, y: 0 },
        boundaries: this.boundaries,
        sprites: ghostSprites,
        speed: 1.5,
        startDelay: 3000
      });

      const safeExitX = 102 * TILE_SIZE + MAZE_OFFSET_X;
      const exitY = 5 * TILE_SIZE + MAZE_OFFSET_Y;

      ghost.setWaypoints([
        { x: safeExitX, y: spawnY },
        { x: safeExitX, y: exitY }
      ]);

      return ghost;
    });
  }

  animate = (): void => {
    this.animationId = window.requestAnimationFrame(this.animate);
    this.background.render(this.ctx);

    if (this.lives <= 0) {
      this.ctx.fillStyle = 'white';
      this.ctx.font = '20px "Press Start 2P"';
      const gameOverText = "GAME OVER";
      const gameOverMetrics = this.ctx.measureText(gameOverText);
      this.ctx.fillText(gameOverText, this.canvas.width / 2 - gameOverMetrics.width / 2, this.canvas.height / 2 + 65);

      this.ctx.font = '10px "Press Start 2P"';
      const restartText = "Press ENTER to Restart";
      const restartMetrics = this.ctx.measureText(restartText);
      this.ctx.fillText(restartText, this.canvas.width / 2 - restartMetrics.width / 2, this.canvas.height / 2 + 75);
      return;
    }

    for (let i = this.pellets.length - 1; i >= 0; i--) {
      const pellet = this.pellets[i];
      pellet.render(this.ctx);

      if (!this.isDying &&
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

    if (this.isDying) return;

    for (let i = this.ghosts.length - 1; i >= 0; i--) {
      const ghost = this.ghosts[i];
      ghost.update();
      ghost.render(this.ctx);

      if (
        Math.hypot(
          ghost.position.x - this.player.position.x,
          ghost.position.y - this.player.position.y
        ) <
        ghost.width / 2 + this.player.width / 2
      ) {
        this.handlePacmanDeath();
      }
    }
  };

  handlePacmanDeath() {
    this.isDying = true;

    this.player.playDeathAnimation(() => {
      this.lives -= 1;
      if (this.onLivesChange) {
        this.onLivesChange(this.lives);
      }

      if (this.lives > 0) {
        this.initEntities();
        this.isDying = false;
      } else {
        this.isDying = false;
      }
    });
  }

  updatePlayerDirection = (e: KeyboardEvent): void => {
    if (this.lives <= 0) {
      if (e.key === "Enter") {
        this.restartGame();
      }
      return;
    }

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

  restartGame() {
    this.lives = 3;
    this.score = 0;
    this.pellets = generatePellets();

    if (this.onLivesChange) this.onLivesChange(this.lives);
    if (this.onScoreChange) this.onScoreChange(this.score);

    this.initEntities();
  }

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
    const spriteHeight = image.height;

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

    const rows = 4;
    const cols = 8;
    const spriteWidth = image.width / cols;
    const spriteHeight = image.height / rows;

    const ghostSets = [];

    for (let i = 0; i < rows; i++) {

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