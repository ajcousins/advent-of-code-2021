const text = require('./input.txt');
const binArr = text.default.split("\n");
export {}

const getOxygen = (arr:string[], index?:number):string => {
    if (arr.length === 1) return arr[0];
    const i = index ? index : 0;
    const value = arr.reduce((pre, cur):number => 
        cur.charAt(i) === "1" ? pre + Number(cur.charAt(i)) : pre
        , 0) >= arr.length / 2 ? 1 : 0;
    const newArr = arr.filter(bin => Number(bin.charAt(i)) === value)

    return getOxygen(newArr, i + 1);
}

const getCo2 = (arr:string[], index?:number):string => {
    if (arr.length === 1) return arr[0];
    const i = index ? index : 0;
    const value = arr.reduce((pre, cur):number => 
        cur.charAt(i) === "1" ? pre + Number(cur.charAt(i)) : pre
        , 0) < arr.length / 2 ? 1 : 0;
    const newArr = arr.filter(bin => Number(bin.charAt(i)) === value)

    return getCo2(newArr, i + 1);
}

const binToDec = (bin:string):number => parseInt(bin, 2);

console.log("getOxygen:", getOxygen(binArr));
console.log("getCo2:", getCo2(binArr));
console.log("life support:", binToDec(getOxygen(binArr)) * binToDec(getCo2(binArr)));

