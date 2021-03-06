const text = require('./input.txt');
export {}

interface Coord {
    x: number;
    y: number
}

const coords = text.default.split("\n\n")[0].split("\n").map((line:string) => {
    return { x: line.split(",")[0], y: line.split(",")[1] }
});

const width = coords.reduce((p:number, c:any) => Math.max(p, Number(c.x)), 0)
const height = coords.reduce((p:number, c:any) => Math.max(p, Number(c.y)), 0)
const grid = new Array(height + 1).fill([]).map(() => new Array(width + 1).fill("."))

coords.forEach((coord:Coord) => {
    grid[coord.y][coord.x] = "#";
})

function fold(grid:string[][], axis:string, lineNum:number) {
    let gridCopy = grid.map((arr:string[]) => arr.slice());
    let foldHalf:string[][] = []
    if (axis === "y") {
        foldHalf = gridCopy.slice(lineNum + 1).reverse();
        gridCopy = gridCopy.slice(0, lineNum)
    } else if (axis === "x") {
        foldHalf = gridCopy.map((line:string[]) => line.slice(lineNum + 1).reverse())
        gridCopy = gridCopy.map((line:string[]) => line.slice(0, lineNum))
    }
    gridCopy = gridCopy.map((line:string[], yIndex) => 
        line.map((char:string, xIndex) => 
            (char === "#" || foldHalf[yIndex][xIndex] === "#") ? "#" : "." ))
    return gridCopy;
}

const result = fold(grid, 'x', 655);

console.log(result.flat().reduce((p:number, c:string) => {
    if (c === "#") return p + 1;
    else return p;
}, 0));