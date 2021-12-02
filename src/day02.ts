import {posArr} from './day02Input';

const pos: {horiz: number, depth: number} = {horiz: 0, depth: 0}

posArr.forEach((cmdString)=> {
    const cmdArr= cmdString.split(" ")
    if (cmdArr[0] === "forward") pos.horiz = pos.horiz + Number(cmdArr[1]);
    if (cmdArr[0] === "up") pos.depth = pos.depth - Number(cmdArr[1]);
    if (cmdArr[0] === "down") pos.depth = pos.depth + Number(cmdArr[1]);
})

console.log("pos:", pos);
console.log("answer:", pos.horiz * pos.depth);