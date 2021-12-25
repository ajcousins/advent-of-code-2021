const text = require('./input.txt');
export {}

const targetArr = text.default
    .split(" ")
    .slice(2, 4)
    .map((dim:string) => dim[0] === "x" ? dim.slice(2, -1) : dim.slice(2))
    .map((dim:string) => dim.split("..").map((dim:string) => Number(dim)))

const target = {
    xMin: targetArr[0][0],
    xMax: targetArr[0][1],
    yMin: targetArr[1][0],
    yMax: targetArr[1][1]
}
console.log(target);

