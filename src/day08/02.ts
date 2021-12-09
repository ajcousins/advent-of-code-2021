const text = require('./input.txt');
export {}

interface Row {
    def: string[],
    digits: string[],
    indexDict?: string[],
}

const arr = text.default.split("\n").map((row:string):Row => {
    const def = row.split(" | ")[0].split(" ").map((word:string) => word.split("").sort().join(""));
    const digits = row.split(" | ")[1].split(" ").map((word:string) => word.split("").sort().join(""));
    return { def, digits }
})

function getDiff(wordA:string, wordB:string) {
    let i = 0;
    let j = 0;
    let result = "";

    while (j < wordB.length)
    {
        wordA[i] != wordB[j] || i == wordA.length ? result += wordB[j] : i++;
        j++;
    }
    return result;
}

const evalArr = arr.map((row:Row) => {
    const digitArms = {
        top: "",
        topRight: "",
        middle: "",
        bottom: ""
    }

    const indexDict = new Array(10).fill("");

    row.def.forEach((word:string) => {
        if (word.length === 2) indexDict[1] = word;
        if (word.length === 3) indexDict[7] = word;
        if (word.length === 4) indexDict[4] = word;
        if (word.length === 7) indexDict[8] = word;
    })

    digitArms.top = getDiff(indexDict[1], indexDict[7]);
    digitArms.topRight = indexDict[1];
    digitArms.bottom = getDiff(digitArms.top, getDiff(indexDict[4], indexDict[8]));
    digitArms.middle = getDiff(indexDict[1], indexDict[4])

    row.def.forEach((word:string) => {
        if (word.length === 6) {
            if (word.indexOf(digitArms.bottom[0]) === -1 || word.indexOf(digitArms.bottom[1]) === -1) 
                indexDict[9] = word;
            if (word.indexOf(digitArms.topRight[0]) === -1 || word.indexOf(digitArms.topRight[1]) === -1) 
                indexDict[6] = word;
            if (word.indexOf(digitArms.middle[0]) === -1 || word.indexOf(digitArms.middle[1]) === -1) 
                indexDict[0] = word;
        }

        if (word.length === 5) {
            if (word.includes(digitArms.topRight[0]) && word.includes(digitArms.topRight[1]))
                indexDict[3] = word;
            else if (word.includes(digitArms.bottom[0]) && word.includes(digitArms.bottom[1]))
                indexDict[2] = word;
            else indexDict[5] = word;
        }
    })

    return {... row, indexDict}
})


const result = evalArr.map((row:Row) => row.digits.map((word:string) => row.indexDict.indexOf(word)).join(""))
    .reduce((p:number, c:string) => Number(c) + p ,0)

console.log("result:", result);
