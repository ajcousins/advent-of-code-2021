import {posArr} from './day02Input';

const pos: {horiz: number, depth: number, aim: number} = {horiz: 0, depth: 0, aim: 0};

posArr.forEach((cmdString)=> {
    const cmdArr= cmdString.split(" ")
    if (cmdArr[0] === "up") pos.aim -= Number(cmdArr[1]);
    if (cmdArr[0] === "down") pos.aim += Number(cmdArr[1]);

    if (cmdArr[0] === "forward") {
        pos.horiz += Number(cmdArr[1]);
        pos.depth += pos.aim * Number(cmdArr[1]);
    }
})

console.log("pos:", pos);
console.log("answer:", pos.horiz * pos.depth);