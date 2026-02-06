
import { collisions } from './src/data/collisions';
import { MAP_WIDTH, TILE_SIZE } from './src/constants';

function check(x: number, y: number) {
    const idx = y * MAP_WIDTH + x;
    const val = collisions[idx];
    console.log(`Tile (${x}, ${y}): ${val} ${val === 10547 ? '(WALL)' : '(OPEN)'}`);
    return val !== 10547;
}

const startX = 56;
const startY = 13;
const ghosts = 3;

console.log(`Checking spawn area for ${ghosts} ghosts...`);

for (let i = 0; i < ghosts; i++) {
    const gx = startX + i * 4;
    const gy = startY;
    check(gx, gy);
}
