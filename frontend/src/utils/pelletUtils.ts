import { MAP_WIDTH, MAZE_OFFSET_X, MAZE_OFFSET_Y, TILE_SIZE } from "../constants";
import { pellets } from "../data/pellets";
import { pelletsLarge } from "../data/pelletsLarge";
import Pellet from "../classes/Pellet";

export function generatePellets() {
    const pelletsMap: number[][] = [];
    const pelletsLargeMap: number[][] = [];

    for (let i = 0; i < pellets.length; i += MAP_WIDTH) {
        pelletsMap.push(pellets.slice(i, i + MAP_WIDTH));
    }

    for (let i = 0; i < pelletsLarge.length; i += MAP_WIDTH) {
        pelletsLargeMap.push(pelletsLarge.slice(i, i + MAP_WIDTH));
    }

    const generatedPellets: Pellet[] = [];
    const visitedLarge = new Set<string>();

    for (let i = 0; i < pelletsLargeMap.length; i++) {
        for (let j = 0; j < pelletsLargeMap[i].length; j++) {
            if (pelletsLargeMap[i][j] !== 0 && !visitedLarge.has(`${i},${j}`)) {
                visitedLarge.add(`${i},${j}`);
                visitedLarge.add(`${i},${j + 1}`);
                visitedLarge.add(`${i + 1},${j}`);
                visitedLarge.add(`${i + 1},${j + 1}`);

                const centerX = (j + 1) * TILE_SIZE + MAZE_OFFSET_X;
                const centerY = (i + 1) * TILE_SIZE + MAZE_OFFSET_Y;

                generatedPellets.push(
                    new Pellet({
                        position: {
                            x: centerX - 3,
                            y: centerY - 3,
                        },
                        isPowerPellet: true
                    })
                );
            }
        }
    }

    for (let i = 0; i < pelletsMap.length; i += 2) {
        for (let j = 0; j < pelletsMap[i].length; j += 2) {
            let hasPellet = false;
            if (pelletsMap[i][j] !== 0) hasPellet = true;
            else if (j + 1 < pelletsMap[i].length && pelletsMap[i][j + 1] !== 0) hasPellet = true;
            else if (i + 1 < pelletsMap.length && pelletsMap[i + 1][j] !== 0) hasPellet = true;
            else if (i + 1 < pelletsMap.length && j + 1 < pelletsMap[i].length && pelletsMap[i + 1][j + 1] !== 0) hasPellet = true;

            const isOccupiedByLarge =
                visitedLarge.has(`${i},${j}`) ||
                visitedLarge.has(`${i},${j + 1}`) ||
                visitedLarge.has(`${i + 1},${j}`) ||
                visitedLarge.has(`${i + 1},${j + 1}`);

            if (hasPellet && !isOccupiedByLarge) {
                const centerX = (j + 1) * TILE_SIZE + MAZE_OFFSET_X;
                const centerY = (i + 1) * TILE_SIZE + MAZE_OFFSET_Y;

                generatedPellets.push(
                    new Pellet({
                        position: {
                            x: centerX - 3,
                            y: centerY - 3,
                        },
                    })
                );
            }
        }
    }

    return generatedPellets;
}
