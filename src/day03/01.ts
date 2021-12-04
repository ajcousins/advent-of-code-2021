const text = require('./input.txt');
const binArr = text.default.split("\n");
export {}

/*
1. create a sum array of the length of the binary.
    If 110101, then: [0, 0, 0, 0, 0, 0]

2. For each line, add each element to the sum array.

3. Calculate gamma and epsilon based on sum array.
*/

const getPower = (arr: string[]) => {

    const sumArr = Array(arr[0].length).fill(0);

    arr.forEach((line:string) => {
        line.split("").forEach((digit, i) => {
            sumArr[i] += Number(digit);
        });
    })

    const gamma = parseInt(sumArr
        .map((digit) => digit > arr.length / 2 ? 1 : 0)
        .join(""), 2);

    const epsilon = parseInt(sumArr
        .map((digit) => digit < arr.length / 2 ? 1 : 0)
        .join(""), 2);
 
    console.log("gamma:", gamma);
    console.log("epsilon:", epsilon);
    console.log("power:", gamma * epsilon);
}


getPower(binArr);



