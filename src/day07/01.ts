const text = require('./input.txt');
export {}

const sortedArr = text.default
    .split(",")
    .map((val:string) => Number(val))
    .sort((a:number, b:number) => a > b ? 1 : -1);

const getMedian = (sortedArr:number[]) => sortedArr[Math.floor(sortedArr.length / 2)];

const calcCost = (arr:number[], val:number) => 
    arr.map((pos:number) => Math.abs(pos - val))
       .reduce((p:number, c:number) => p + c ,0)

const alignVal = getMedian(sortedArr);
let lowest = {cost: Infinity, val: 0}
let cursor = {cost: calcCost(sortedArr, alignVal), val: alignVal}

// check left of median
while (cursor.cost < lowest.cost) {
    lowest = {...cursor};
    cursor.val -= 1;
    cursor.cost = calcCost(sortedArr, cursor.val)
}

// check right of median
cursor = {
    cost: calcCost(sortedArr, alignVal + 1),
    val: alignVal + 1
}

while (cursor.cost < lowest.cost) {
    lowest = {...cursor};
    cursor.val += 1;
    cursor.cost = calcCost(sortedArr, cursor.val);
}

console.log("lowest:", lowest);