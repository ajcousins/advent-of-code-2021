const text = require('./input.txt');
export {}

const start = text.default.split("\n")[0]
const STEPS = 10;

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

function mutate(polymer:string, steps:number):string {
    if (!steps) return polymer;
    const newPolymerArr = [];
    const arr = polymer.split("");
    newPolymerArr.push(arr[0]);
    for (let i = 0; i < arr.length - 1; i++) {
        const key = `${arr[i]}${arr[i + 1]}`
        newPolymerArr.push(refDict[key])
        newPolymerArr.push(arr[i + 1]);
    }
    return mutate(newPolymerArr.join(""), steps - 1);
}

const result = mutate(start, STEPS)
const register:Count = {}

result.split("").forEach((char:string) => {
    !register[char] ? register[char] = 1 : register[char]++;
})

const keys = Object.keys(register);
const max = keys.reduce((p:number, c:string) => Math.max(p, register[c]), 0)
const min = keys.reduce((p:number, c:string) => Math.min(p, register[c]), Infinity)

console.log("answer:", max - min);