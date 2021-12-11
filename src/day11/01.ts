const text = require('./input_test.txt');
export {}

/*
- Parse text into 2D array
- Create runGrid function which takes grid, number of steps and returns grid at end of steps
- Create a counter which is incremented at each flash
- Create the logic for runGrid function
    - During 1 step:
        - Iterate every cell:
            - Each cell increases by 1
            - If cell is greater than 9, increasing surrounding cells by 1
        - Iterate every cell:
            - Any cells greater than 9: 
                - Increment flashes counter by 1
                - Set cell to 0
*/

const grid = text.default.split("\n")
    .map((row:string) => row.split("").map((char:string) => Number(char)))

console.log(grid);

let flashCounter = 0;

function runGrid(grid:number[][], steps:number):number[][]{
    if (!steps) return grid;

    const gridCopy = grid.map((row:number[]) => row.slice());

    for (let y = 0; y < gridCopy.length; y++) {
        for (let x = 0; x < gridCopy[0].length; x++) {
            gridCopy[y][x]++;
        }
    }

    for (let y = 0; y < gridCopy.length; y++) {
        for (let x = 0; x < gridCopy[0].length; x++) {
            /*
            Then, any octopus with an energy level greater than 9 flashes. This 
            increases the energy level of all adjacent octopuses by 1, including 
            octopuses that are diagonally adjacent. If this causes an octopus to 
            have an energy level greater than 9, it also flashes. This process
            continues as long as new octopuses keep having their energy level 
            increased beyond 9. (An octopus can only flash at most once per step.)
            */
            if (gridCopy[y][x] > 9) {
                let toCheck = adjCells(y, x, gridCopy)                
                for (let z = 0; z < toCheck.length; z++) {
                    gridCopy[toCheck[z].y][toCheck[z].x]++
                }
            }
        }
    }

    for (let y = 0; y < gridCopy.length; y++) {
        for (let x = 0; x < gridCopy[0].length; x++) {
            if (gridCopy[y][x] > 9) gridCopy[y][x] = 0;
            flashCounter++;
        }
    }

    return runGrid(gridCopy, steps - 1);
}


// console.log(runGrid(grid, 2));

interface Coord {
    x: number,
    y: number
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

console.log(runGrid(grid, 2));