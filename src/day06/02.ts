const text = require('./input.txt');
export {}

const DAYS = 256;
const initialState = text.default.split(",").map((val:string) => Number(val)).sort();

let populations = new Array(9).fill(0);

initialState.forEach((fish:number) => {
    populations[fish]++;
})

for (let i = 0; i < DAYS; i++) {
    let newFishCount = populations[0];
    populations = populations.slice(1)
    populations[6] += newFishCount;
    populations.push(newFishCount)
}

console.log("end pop:", populations);
console.log("total pop:", populations.reduce((p, c) => c + p, 0));
