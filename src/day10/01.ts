const text = require('./input.txt');
export {}

const lines = text.default.split("\n").map((row:string) => row.split(""))

const parsed = lines.map((line:string[]) => {
    const stack = [];

    for (let i = 0; i < line.length; i++) {
        if (line[i] === "(" || line[i] === "[" || line[i] === "{" || line[i] === "<") {
            stack.push(line[i]);
        } else if (line[i] === ")" && stack[stack.length - 1] !== "(") {
            return 3
        } else if (line[i] === "]" && stack[stack.length - 1] !== "[") {
            return 57
        } else if (line[i] === "}" && stack[stack.length - 1] !== "{") {
            return 1197
        } else if (line[i] === ">" && stack[stack.length - 1] !== "<") {
            return 25137
        } else stack.pop();
    }
    return stack
})

const results = parsed.filter((el:number|string[])=> typeof el === "number")
                      .reduce((p:number, c:number) => p + c)

console.log("results:", results);

