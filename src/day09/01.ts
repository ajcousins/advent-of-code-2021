const text = require('./input.txt');
export {}

const grid = text.default.split("\n").map((row:string) => row.split("").map((digit) => Number(digit)));

let sum = 0;

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        const current = grid[y][x];
        const top = y === 0 ? 10 : grid[y - 1][x];
        const left = x === 0 ? 10 : grid[y][x - 1];
        const right = x === grid[0].length - 1 ? 10 : grid[y][x + 1];
        const bottom = y === grid.length - 1 ? 10 : grid[y + 1][x];
        
        current < Math.min(top, left, right, bottom) && (sum += current + 1);
    }
}

console.log("sum:", sum);