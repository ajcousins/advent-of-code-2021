const text = require('./input.txt');
export {}

const initialState = text.default.split(",").map((val:string) => Number(val));

const spawnFish = (arr:number[], days:number):number[] => {
    if (days === 0) return arr;
    let newFishCount = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(6);
            newFishCount.push(8);
        } else newArr.push(arr[i] - 1);
    }
    return spawnFish(newArr.concat(newFishCount), days - 1);
}

console.log("Fish population:", spawnFish(initialState, 80).length);