const text = require('./input.txt');
export {}

const start = text.default.split("\n")[0]
const STEPS = 40;

interface Dict {
    [index:string]: string
}

interface Count {
    [index:string]: number;
}

const refDict:Dict = {}
text.default.split("\n\n")[1].split("\n").forEach((line:string) => {
    let arr = line.split(" -> ");
    refDict[arr[0]] = arr[1]
})

const initialPairCount:Count = {}
Object.keys(refDict).forEach((pair:string) => {
    initialPairCount[pair] = 0;
})

// Initial counts:
const startArr = start.split("");
for (let i = 0; i < startArr.length - 1; i++) {
    const pairKey = `${startArr[i]}${startArr[i + 1]}`
    initialPairCount[pairKey]++;
}

function mutateCounts(steps:number) {
    let pairCount = {...initialPairCount};
    while (steps) {
        let newPairCount:Count = {}
        Object.keys(refDict).forEach((pair:string) => {
            newPairCount[pair] = 0;
        }) 
        Object.keys(refDict).forEach((key:string) => {
            const resultingChar = refDict[key];
            if (!newPairCount[`${key[0]}${resultingChar}`]) newPairCount[`${key[0]}${resultingChar}`] = pairCount[key];
            else newPairCount[`${key[0]}${resultingChar}`] += pairCount[key];
            if (!newPairCount[`${resultingChar}${key[1]}`]) newPairCount[`${resultingChar}${key[1]}`] = pairCount[key];
            else newPairCount[`${resultingChar}${key[1]}`] += pairCount[key];
        })
        pairCount = {...newPairCount}
        steps--;
    }
    return pairCount
}

const pairCounts = mutateCounts(STEPS);

const singleCharCounts:Count = {};
Object.keys(refDict).forEach((pair:string) => {
    const char = pair[0];
    if (!singleCharCounts[char]) singleCharCounts[char] = pairCounts[pair];
    else singleCharCounts[char] += pairCounts[pair];
})
singleCharCounts[startArr[startArr.length - 1]]++; // Add last char (excluded from counting method, which counts the first of each pair).

const keys = Object.keys(singleCharCounts);
const max = keys.reduce((p:number, c:string) => Math.max(p, singleCharCounts[c]), 0)
const min = keys.reduce((p:number, c:string) => Math.min(p, singleCharCounts[c]), Infinity)
console.log("answer:", max - min);