const text = require('./input.txt');
export {}

const cmds = text.default
    .split("\n")
    .map((cmd:string) => 
        cmd.split(/\s->\s/).map((coord:string) => {
        const coordArr = coord.split(",")
        return {x: Number(coordArr[0]), y: Number(coordArr[1])}
        }))
    .filter((cmd:any) => cmd[0]["x"] === cmd[1]["x"] || cmd[0]["y"] === cmd[1]["y"]);

const maxExtents = cmds.reduce((prev:number, cmd:any) => 
    Math.max(prev, Number(cmd[0]["x"]),Number(cmd[0]["y"]), Number(cmd[1]["x"]), Number(cmd[1]["y"]) 
    ),0) + 1;

const grid:any = []
for (let i = 0; i < maxExtents; i++) {
    grid.push(new Array(maxExtents).fill(0))
}

cmds.forEach((cmd:any) => {
    let cur = {...cmd[0]};
    let end = cmd[1];
    while (cur.x !== end.x) {
        grid[cur.y][cur.x] += 1;
        cur.x < end.x ? cur.x++ : cur.x--;
    }
    while (cur.y !== end.y) {
        grid[cur.y][cur.x] += 1;
        cur.y < end.y ? cur.y++ : cur.y--;
    }
    grid[end.y][end.x] += 1;
})

console.log(grid);
console.log("Number of danger points:", grid.flat().reduce((p:number, c:number) => 
    c > 1 ? p + 1 : p
, 0));