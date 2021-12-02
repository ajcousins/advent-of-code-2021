import {depthsArr} from './day01Input';

// --- PART 1 ---
// let count = 0;

// for (let i = 0; i < depthsArr.length; i++) {
//     if (i === 0) continue;
//     if (depthsArr[i] > depthsArr[i - 1]) count++;
// }

// console.log("singleIncreases:", count);

// --- PART 2 ---

let count = 0;
let lastSum = 0;

for (let i = 0; i < depthsArr.length - 2; i++) {
    const sum = depthsArr[i] + depthsArr[i + 1] + depthsArr[i + 2];
    if (i !== 0) {
        if (sum > lastSum) {
            console.log("increase:", i, "currentSum:", sum, "lastSum:", lastSum)
            count++;
        } else {
            console.log("decrease:", i, "currentSum:", sum, "lastSum:", lastSum)
        }
    }
    
    lastSum = sum;
}

console.log("totalIncreases:", count);

