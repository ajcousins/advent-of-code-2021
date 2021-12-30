const { PriorityQueue } = require('../dataStructures/priorityQueue');
const text = require('./input.txt');
export {}

interface Coord {
    x: number;
    y: number;
    priority?: number;
    risk?: number;
}

interface DistReg {
    [key:string]: number;
}

interface PrevReg {
    [key:string]: string | null;
}

const grid = text.default
    .split("\n")
    .map((line:string) => line.split("").map((c:string) => Number(c)))
    .map((line:number[]) => {
        let arr = [...line];
        const initialLength = line.length;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < initialLength; j++) {
                let newCell = arr[j] + i + 1;
                if (newCell > 9) newCell -= 9;
                arr.push(newCell);
            }
        }
        return arr;
    });

const initialLength = [...grid].length;

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < initialLength; j++) {
        let newLine = [...grid[j]].map((num:number) => (num + i) > 8 ? (num + i - 8) : (num + i + 1))
        grid.push(newLine);
    }
}

console.log(grid);

function renderGrid(grid:number[][]) {
    const root = document.getElementById("anchor");
    console.log("root:", root);
    
    const canvas = document.createElement("div");
    canvas.style.backgroundColor = "#ffeeee"
    canvas.style.width = "1000px"
    canvas.style.height = "50px"
    root.appendChild(canvas)

    grid.forEach((row:number[], y) => {
        const rowDiv = document.createElement("div");
        rowDiv.style.backgroundColor = "#9999ff"
        rowDiv.style.display = "flex"
        canvas.appendChild(rowDiv)
        row.forEach((sq: number, x) => {
            const square = document.createElement("div");
            square.style.backgroundColor = "#eeeeee"
            square.style.width = "10px";
            square.style.height = "10px";
            square.style.fontSize = "0.5rem"
            square.id = `(${x}, ${y})`;
            square.textContent = `${sq}`
            rowDiv.appendChild(square);
        })
    })
}
renderGrid(grid)

const start:Coord = {x: 0, y: 0, risk: grid[0][0]};
const goal:Coord = {x: grid[0].length - 1, y: grid.length - 1, risk: grid[grid.length - 1][grid[0].length - 1]};

function shortestPath(start:Coord, end:Coord) {
    // Initialise objects
    const queue = new PriorityQueue();
    const distances:DistReg = {}
    const previous:PrevReg = {}
    const path = []
    
    // Build initial state
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid.length; x++) {
            if (y === start.y && x === start.x) {
                distances[`(${x},${y})`] = 0;
                queue.enqueue(x, y, 0, grid[y][x])
            } else {
                distances[`(${x},${y})`] = Infinity;
                queue.enqueue(x, y, Infinity, grid[y][x])
            }
            previous[`(${x},${y})`] = null;
        }
    }
    
    while(queue.values.length) {
        let smallest = queue.dequeue();
        if (smallest.x === end.x && smallest.y === end.y) {
            while(previous[`(${smallest.x},${smallest.y})`]) {
                path.push(smallest);
                smallest = previous[`(${smallest.x},${smallest.y})`]
            }
            break;
        }
        if (smallest || distances[`(${smallest.x},${smallest.y})`] !== Infinity) {
            const toVisit = validNeighbours(smallest);
            toVisit.forEach((neighbour:Coord) => {
                let candidate = distances[`(${smallest.x},${smallest.y})`] + neighbour.risk
                if (candidate < distances[`(${neighbour.x},${neighbour.y})`]) {
                    distances[`(${neighbour.x},${neighbour.y})`] = candidate;
                    previous[`(${neighbour.x},${neighbour.y})`] = smallest
                    queue.enqueue(neighbour.x, neighbour.y, candidate)
                }
            })
        }
    }
    console.log("path:", path);
    highlightPath(path);
    return path.reverse()
}

const smallestRisk = shortestPath(start, goal)
    .map((step:Coord) => grid[step.y][step.x])
    .reduce((p:number, c:number) => p + c, 0)
console.log("smallestRisk:", smallestRisk);

function validNeighbours(coord:Coord):Coord[] {
    const dirs = [{y: -1, x: 0}, {y: 0, x: -1}, {y: 0, x: 1}, {y: 1, x: 0}]
    const possDirs = dirs.map((dir:Coord) => {
        return {y: coord.y + dir.y, x: coord.x + dir.x, priority: dir.priority}
    }).filter((dir:Coord) => 
        (dir.y >= 0) && (dir.y < grid.length) && (dir.x >= 0) && (dir.x < grid[0].length))
    return possDirs.map((dir:Coord) => {
        return {...dir, risk: grid[dir.y][dir.x]}
    })
}

function highlightPath(coords: Coord[]) {
    coords.forEach((coord: Coord) => {
        const square = document.getElementById(`(${coord.x}, ${coord.y})`)
        square.style.backgroundColor = "yellow";
    })
}