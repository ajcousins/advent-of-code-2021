const text = require('./input_test.txt');
export {}

interface Coord {
    x: number;
    y: number
}

const coords = text.default.split("\n\n")[0].split("\n").map((line:string) => {
    return { x: line.split(",")[0], y: line.split(",")[1] }
});
const instructions = text.default.split("\n\n")[1].split("\n");

console.log(coords);
console.log(instructions);

const width = coords.reduce((p:number, c:any) => {
    return Math.max(p, Number(c.x));
}, 0)

const height = coords.reduce((p:number, c:any) => {
    return Math.max(p, Number(c.y));
}, 0)

console.log("width:", width);
console.log("height:", height);

const grid = new Array(height + 1).fill([]).map(() => new Array(width + 1).fill("."))
console.log("grid:", ...grid);

coords.forEach((coord:Coord) => {
    grid[coord.y][coord.x] = "#";
})

console.log("grid:", ...grid);

function fold(grid:string[][], axis:string, lineNum:number) {

}