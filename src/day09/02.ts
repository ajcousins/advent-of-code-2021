const text = require('./input_test.txt');
export {}

const grid = text.default.split("\n").map((row:string) => row.split("").map((digit) => Number(digit)));

console.log(grid);

interface Coord {
    x:number, 
    y:number
}

const lowPoints:Coord[] = [];

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        const current = grid[y][x];
        const up = y === 0 ? 10 : grid[y - 1][x];
        const left = x === 0 ? 10 : grid[y][x - 1];
        const right = x === grid[0].length - 1 ? 10 : grid[y][x + 1];
        const down = y === grid.length - 1 ? 10 : grid[y + 1][x];
        
        current < Math.min(up, left, right, down) && (lowPoints.push({x, y}));
    }
}

console.log("lowPoints:", lowPoints);


function sumNeighbours(cur:Coord, from?:Coord, checked?:Coord[]) {
    // define this location
    const current = grid[cur.y][cur.x];
    const up = cur.y === 0 ? 10 : grid[cur.y - 1][cur.x];
    const left = cur.x === 0 ? 10 : grid[cur.y][cur.x - 1];
    const right = cur.x === grid[0].length - 1 ? 10 : grid[cur.y][cur.x + 1];
    const down = cur.y === grid.length - 1 ? 10 : grid[cur.y + 1][cur.x];

    // if everything around me has been checked, then return 0;
    // if (checked.)

    const neighbours:Coord[] = []
    if (cur.y > 0) neighbours.push({x: cur.x, y: cur.y - 1});
    else if (cur.y < grid.length - 1) neighbours.push({x: cur.x, y: cur.y + 1});
    if (cur.x > 0) neighbours.push({x: cur.x + 1, y: cur.y});
    else if (cur.x < grid[0].length - 1) neighbours.push({x: cur.x - 1, y: cur.y});
    console.log("cur:", cur, "neighbours:", neighbours);
    



    const toCheckNext:Coord[] = []


    return 0;
}

const basinSizes:number[] = []

lowPoints.forEach((lowPoint:Coord) => {
    basinSizes.push(sumNeighbours(lowPoint))
})

console.log("basinSizes:", basinSizes);