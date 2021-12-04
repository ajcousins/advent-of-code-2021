const text = require('./input_test.txt');
export {}

interface Board {
    gridNums: string[][]
}

class Board {
    constructor(input:string) {
        this.gridNums = input
            .split(/\n\s?/)
            .map((str:string) => str.split(/\s+/));
        // this.state = {
        // }
    };
    find(val:string) {
        for (let y = 0; y < this.gridNums.length; y++) {
            for (let x = 0; x < this.gridNums[0].length; x++) {
                if (this.gridNums[y][x] === val) return [x, y];
            }
        }
        return null;
    }
}

const bingoNums  = text.default.split("\n")[0].split(",");
const boards = text.default.split("\n\n").splice(1).map((str:string) => {
    return new Board(str);
});




console.log(bingoNums);
console.log(boards);

console.log(boards[0].find("0"));

