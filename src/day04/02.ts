const text = require('./input.txt');
export {}

interface Board {
    gridNums: string[][];
    state: { 
        [key: string]: string[]
    }
}

class Board {
    constructor(input:string) {
        this.gridNums = input
            .split(/\n\s?/)
            .map((str:string) => str.split(/\s+/));
        this.state = {}
    };
    // find method returns coordinate of val in this.board
    find(val:string) {
        for (let y = 0; y < this.gridNums.length; y++) {
            for (let x = 0; x < this.gridNums[0].length; x++) {
                if (this.gridNums[y][x] === val) return [x, y]
            }
        }
        return null;
    }
    // isWinning method updates board state. 
    // Returns true if any row/col length === 5
    isWinning(val:string) {
        const coord = this.find(val)
        if (coord) {
            // Update board state
            if (!this.state[`x-${coord[0]}`]) this.state[`x-${coord[0]}`] = [val]
            else this.state[`x-${coord[0]}`].push(val)
            if (!this.state[`y-${coord[1]}`]) this.state[`y-${coord[1]}`] = [val]
            else this.state[`y-${coord[1]}`].push(val)

            // Check if either row or col is now winning
            if (this.state[`x-${coord[0]}`].length === 5 ||
                this.state[`y-${coord[1]}`].length === 5) return true;
        }
        return false;
    }
    // getUnmarkedSum returns sum of unmarked numbers
    getUnmarkedSum() {
        const boardSum = this.gridNums.reduce((pRow, cRow) => {
            const rowSum = cRow.reduce((p, c) => p + Number(c), 0)
            return pRow + rowSum;
        }, 0)
        const stateKeys = Object.keys(this.state);
        const markedSum = stateKeys.reduce((pRow, cRow) => {
            const rowSum = this.state[cRow].reduce((p, c) => {
                return p + Number(c)
            }, 0)
            return pRow + rowSum
        }, 0) / 2
        return boardSum - markedSum;
    }
}

const bingoNums  = text.default.split("\n")[0].split(",");
const boards = text.default.split("\n\n").splice(1).map((str:string) => {
    let boardStart = str
    if (boardStart.charAt(0) === " ") boardStart = boardStart.slice(1);    
    return new Board(boardStart);
});

const winningBoards:number[] = []


// Iterate bingo numbers
const playGame = (gameNums:string[], boards:Board[]) => {
    gameNums.forEach((num:string) => {
        boards.forEach((board:Board, i:number) => {
            if (board.isWinning(num) && !winningBoards.includes(i)) {
                const sum = board.getUnmarkedSum();
                winningBoards.push(i);
                if (winningBoards.length === boards.length) {
                    console.log(`Board ${i} wins last.`);
                    console.log("Unmarked sum:", sum)
                    console.log("Answer:", sum * Number(num) );
                }
            }
        }) 
    })
}

playGame(bingoNums, boards);

