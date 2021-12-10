const text = require('./input.txt');
export {}

const grid = text.default.split("\n").map((row:string) => row.split("").map((digit) => Number(digit)));

interface Coord {
    x:number, 
    y:number,
    val:number
}

const lowPoints:Coord[] = [];

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        const current = grid[y][x];
        const up = y === 0 ? 10 : grid[y - 1][x];
        const left = x === 0 ? 10 : grid[y][x - 1];
        const right = x === grid[0].length - 1 ? 10 : grid[y][x + 1];
        const down = y === grid.length - 1 ? 10 : grid[y + 1][x];
        
        current < Math.min(up, left, right, down) && (lowPoints.push({x, y, val: grid[y][x]}));
    }
}

function sumNeighbours(root:Coord) {
  
    const queue:Coord[] = []
    const visited:Coord[] = []
    queue.push(root);

    while (queue.length) {
        let current = queue.shift()
        visited.push(current)

        let up = getDirVal(current, "up")
        let left = getDirVal(current, "left")
        let right = getDirVal(current, "right")
        let down = getDirVal(current, "down")

        const dirs = [up, left, right, down];

        dirs.forEach((dir) => {
            if (dir && dir.val > current.val && dir.val !== 9 && !coordInArr(visited, dir) && !coordInArr(queue, dir)) {
                queue.push(dir);
            }
        })
    }

    return visited.length;
}

const basinSizes:number[] = []
lowPoints.forEach((lowPoint:Coord) => {
    basinSizes.push(sumNeighbours(lowPoint))
})

function getDirVal(coord:Coord, dir:string):Coord {
    switch(dir) {
        case "up":
            if (coord.y === 0) return null
            else return { x: coord.x, y: coord.y - 1, val: grid[coord.y - 1][coord.x]}
        case "left":
            if (coord.x === 0) return null
            else return { x: coord.x - 1, y: coord.y, val: grid[coord.y][coord.x - 1]}
        case "right":
            if (coord.x === grid[0].length - 1) return null
            else return { x: coord.x + 1, y: coord.y, val: grid[coord.y][coord.x + 1]}
        case "down":
            if (coord.y === grid.length - 1) return null
            else return { x: coord.x, y: coord.y + 1, val: grid[coord.y + 1][coord.x]}
        default:
            return null;
    }
}

function coordInArr(arr:Coord[], coord:Coord):boolean {
    const refArr = [...arr]
    const check = {...coord}
    return refArr.some((row:Coord, i) => row.x === check.x && row.y === check.y)
}

console.log("basinSizes:", basinSizes.sort((a, b) => a < b ? 1 : -1).slice(0, 3).reduce((c, p) => c * p));