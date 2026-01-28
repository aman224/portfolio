import { MAP_WIDTH, MAZE_OFFSET_X, MAZE_OFFSET_Y } from "@constants";
import { collisions } from "../data/collisions";
import Boundary from "../classes/Boundary";
import type Sprite from "../classes/Sprite";

export function rectangularCollisionDetection({
  object1,
  object2,
}: {
  object1: Sprite;
  object2: Boundary;
}) {
  return (
    object1.position.x + object1.width > object2.x() &&
    object1.position.x < object2.x() + object2.width &&
    object1.position.y < object2.y() + object2.height &&
    object1.position.y + object1.height > object2.y()
  );
}

export function generateBoundaries() {
  const collisionsMap = [];
  for (let i = 0; i < collisions.length; i += MAP_WIDTH) {
    collisionsMap.push(collisions.slice(i, i + MAP_WIDTH));
  }

  const boundaries: Boundary[] = [];
  collisionsMap.forEach((row, i) => {
    row.forEach((boundaryData, j) => {
      if (boundaryData === 10547) {
        boundaries.push(
          new Boundary({
            x: j * Boundary.width + MAZE_OFFSET_X,
            y: i * Boundary.height + MAZE_OFFSET_Y,
          })
        );
      }
    });
  });

  return boundaries;
}
