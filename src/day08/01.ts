const text = require('./input.txt');
export {}

const arr = text.default.split("\n").map((row:string) => row.split(" | ")[1].split(" ")).flat().reduce((p:string, c:string) => 
    c.length === 2 || c.length === 4 || c.length === 3 || c.length == 7 ? 1 + p : p
,0)

console.log("arr:", arr);

