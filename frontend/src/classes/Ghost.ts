import { TILE_SIZE, MAP_WIDTH } from "../constants";
import type { Coordinates } from "../types";
import { rectangularCollisionDetection } from "../utils/collisionUtils";
import type Boundary from "./Boundary";

import Sprite, { type SpriteConstructor } from "./Sprite";

interface GhostConstructor extends SpriteConstructor {
    boundaries?: Boundary[];
    velocity: Coordinates;
    sprites: {
        up: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
        down: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
        right: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
        left: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    };
    speed?: number;
}

export default class Ghost extends Sprite {
    private velocity: Coordinates;
    private direction: string | null;
    private boundaries: Boundary[];
    private sprites: {
        up: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
        down: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
        right: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
        left: HTMLImageElement | HTMLCanvasElement | ImageBitmap;
    };
    private waypoints: Coordinates[] = [];
    private speed: number;
    private activationTime: number;

    constructor({
        boundaries = [],
        velocity = { x: 0, y: 0 },
        sprites,
        speed = 2,
        startDelay = 0,
        ...options
    }: GhostConstructor & { startDelay?: number }) {
        super(options);

        this.velocity = velocity;
        this.direction = "R";
        this.boundaries = boundaries;
        this.sprites = sprites;
        this.speed = speed;
        this.moving = true;
        this.waypoints = [];
        this.activationTime = Date.now() + startDelay;
    }

    setWaypoints(waypoints: Coordinates[]) {
        this.waypoints = waypoints;
    }

    update() {
        if (Date.now() < this.activationTime) {
            return;
        }

        if (this.waypoints.length > 0) {
            const target = this.waypoints[0];
            const dx = target.x - this.position.x;
            const dy = target.y - this.position.y;

            const dist = Math.hypot(dx, dy);

            if (dist < this.speed) {
                this.position.x = target.x;
                this.position.y = target.y;
                this.waypoints.shift();
                this.velocity = { x: 0, y: 0 };
            } else {
                const angle = Math.atan2(dy, dx);
                this.velocity.x = Math.cos(angle) * this.speed;
                this.velocity.y = Math.sin(angle) * this.speed;

                if (Math.abs(this.velocity.x) > Math.abs(this.velocity.y)) {
                    this.direction = this.velocity.x > 0 ? "R" : "L";
                } else {
                    this.direction = this.velocity.y > 0 ? "D" : "U";
                }
            }
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            this.updateVelocity();
            return;
        }

        const inBounds = this.position.x >= 0 && this.position.x <= (MAP_WIDTH * TILE_SIZE) - TILE_SIZE;

        if (this.isAlignedWithGrid() && inBounds) {
            this.aiMovement();
        }

        if (this.collisionDetected()) {
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.aiMovement();
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.x < -TILE_SIZE) {
            this.position.x = MAP_WIDTH * TILE_SIZE;
        } else if (this.position.x > MAP_WIDTH * TILE_SIZE) {
            this.position.x = -TILE_SIZE;
        }
    }

    aiMovement() {
        const directions = ['U', 'D', 'L', 'R'];
        const validDirections: string[] = [];

        directions.forEach(dir => {
            const testVel = this.getVelocityForDirection(dir);
            const testPos = {
                x: this.position.x + testVel.x,
                y: this.position.y + testVel.y
            };

            if (!this.checkCollisionAt(testPos)) {
                if (!this.isOppositeDirection(dir)) {
                    validDirections.push(dir);
                }
            }
        });

        if (validDirections.length === 0) {
            directions.forEach(dir => {
                const testVel = this.getVelocityForDirection(dir);
                const testPos = { x: this.position.x + testVel.x, y: this.position.y + testVel.y };
                if (!this.checkCollisionAt(testPos)) {
                    validDirections.push(dir);
                }
            });
        }

        if (validDirections.length > 0) {
            const randomIndex = Math.floor(Math.random() * validDirections.length);
            const chosenDir = validDirections[randomIndex];
            this.direction = chosenDir;
            this.updateVelocity();
        }

        this.moving = true;
    }

    isOppositeDirection(dir: string): boolean {
        if (this.direction === 'R' && dir === 'L') return true;
        if (this.direction === 'L' && dir === 'R') return true;
        if (this.direction === 'U' && dir === 'D') return true;
        if (this.direction === 'D' && dir === 'U') return true;
        return false;
    }

    getVelocityForDirection(dir: string): Coordinates {
        switch (dir) {
            case 'U': return { x: 0, y: -this.speed };
            case 'D': return { x: 0, y: this.speed };
            case 'L': return { x: -this.speed, y: 0 };
            case 'R': return { x: this.speed, y: 0 };
        }
        return { x: 0, y: 0 };
    }

    updateVelocity() {
        this.velocity = this.getVelocityForDirection(this.direction || 'R');

        switch (this.direction) {
            case "U": this.image = this.sprites.up; break;
            case "L": this.image = this.sprites.left; break;
            case "D": this.image = this.sprites.down; break;
            case "R": this.image = this.sprites.right; break;
        }
    }

    checkCollisionAt(pos: Coordinates): boolean {
        const simulatedObj = {
            ...this,
            position: pos,
            width: this.width,
            height: this.height
        };

        for (const boundary of this.boundaries) {
            if (rectangularCollisionDetection({
                object1: simulatedObj,
                object2: boundary
            })) {
                return true;
            }
        }
        return false;
    }

    collisionDetected() {
        return this.checkCollisionAt({
            x: this.position.x + this.velocity.x,
            y: this.position.y + this.velocity.y
        });
    }

    isAlignedWithGrid() {
        return (
            this.position.x % TILE_SIZE === 0 && this.position.y % TILE_SIZE === 0
        );
    }
}
