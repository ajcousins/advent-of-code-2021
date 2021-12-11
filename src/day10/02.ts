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

const answer = parsed.filter((row:number|string[]) =>  typeof row !== "number")
                     .map((row:string[]) => [...row]
                        .reverse().map((char:string) => {
                            return char === "(" ? 1 :
                                   char === "[" ? 2 :
                                   char === "{" ? 3 : 4
                        }))

const scores = answer.map((row:number[]) => [...row].reduce((p:number, c:number) => (p * 5) + c , 0))

const winner = [...scores].sort((a:number, b:number) => a > b ? 1 : -1)[(scores.length - 1) / 2]

console.log("winner:", winner);