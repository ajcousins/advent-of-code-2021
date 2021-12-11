const text = require('./input.txt');
export {}

interface Coord {
    x: number,
    y: number
}

const grid = text.default.split("\n")
    .map((row:string) => row.split("").map((char:string) => Number(char)))

let flashCounter = 0;

function runGrid(grid:number[][], steps:number, ref?:number):number[][]{
    if (!steps) return grid;

    const isInSync = [...grid].flat().every((val:number, i, arr) => val === arr[0])

    if (isInSync) {
        console.log(`In sync at step ${ref - steps}.`)
        return grid
    }

    const gridCopy = grid.map((row:number[]) => row.slice());
    for (let y = 0; y < gridCopy.length; y++) {
        for (let x = 0; x < gridCopy[0].length; x++) {
            gridCopy[y][x]++;
        }
    }
    const queue = [];
    for (let y = 0; y < gridCopy.length; y++) {
        for (let x = 0; x < gridCopy[0].length; x++) {
            if (gridCopy[y][x] > 9) queue.push({y, x});  
        }
    }
    while (queue.length) {
        let cur = queue.shift();
        let toCheck = adjCells(cur.y, cur.x, gridCopy)
        toCheck.forEach((coord:Coord) => {
            if (gridCopy[coord.y][coord.x] === 9) {
                queue.push({y: coord.y, x: coord.x})
            }
            gridCopy[coord.y][coord.x]++;
        })
    }
    for (let y = 0; y < gridCopy.length; y++) {
        for (let x = 0; x < gridCopy[0].length; x++) {
            if (gridCopy[y][x] > 9) {
                gridCopy[y][x] = 0;
                flashCounter++;
            }
        }
    }
    return runGrid(gridCopy, steps - 1, ref ? ref : steps);
}

function adjCells(y:number, x:number, grid:number[][]):Coord[] {
    const coords:Coord[] = []
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            coords.push({y: y + i, x: x + j})
        }
    }
    return coords.filter((coord:Coord) => {
        if (coord.x === x && coord.y === y) return false
        if (coord.x < 0 ||
            coord.y < 0 ||
            coord.x > grid.length - 1 ||
            coord.y > grid.length - 1) return false
        return true
    });
}

console.log(runGrid(grid, 300));