const text = require('./input.txt');
export {}

interface Coord {
    x: number;
    y: number;
}

interface Area {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
}

interface Report {
    success: boolean;
    nearest: Coord;
}

interface Reg {
    [key:string]: boolean;
}

const targetArr = text.default.split(" ")
                              .slice(2, 4)
                              .map((dim:string) => dim[0] === "x" ? dim.slice(2, -1) : dim.slice(2))
                              .map((dim:string) => dim.split("..").map((dim:string) => Number(dim)))

const target:Area = {
    xMin: targetArr[0][0],
    xMax: targetArr[0][1],
    yMin: targetArr[1][0],
    yMax: targetArr[1][1]
}
console.log(target);

function probe(sVel:Coord, target:Area, curPos?:Coord):Report {
    // SET EMPTY PARAMS
    if (!curPos) curPos = {x: 0, y: 0};

    // ARE WE THERE YET?
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
    && curPos.y >= target.yMin && curPos.y <= target.yMax) 
        return { success: true, nearest: {x: curPos.x, y: curPos.y}}
    
    // UPDATE STATS
    const newPos = {...curPos};
    newPos.x += sVel.x;
    newPos.y += sVel.y;

    const newVel = {...sVel};
    if (sVel.x > 0) newVel.x -= 1;
    if (sVel.x < 0) newVel.x += 1;
    newVel.y -= 1;
    
    // HAVE WE MISSED?
    const prevYFromTarget = Math.abs(curPos.y - target.yMin);
    const curYFromTarget = Math.abs(newPos.y - target.yMin);
    if (sVel.y < 0 && curYFromTarget > prevYFromTarget) 
        return { success: false, nearest: {x: curPos.x, y: curPos.y} }
    
    if (newPos.x > target.xMax)
        return { success: false, nearest: {x: newPos.x, y: newPos.y} }

    return probe(newVel, target, newPos);
}

const yLimit = 200;
const yVisited:Reg = {};
const xyVisited:Reg = {};
const successCoords = [];
let curX = 0;
let dirX = 1;

for (let y = target.yMin; y <= yLimit; y++) {
    let xLeft = false;
    let xRight = false;
    const targetWidth = target.xMax - target.xMin;

    while (!yVisited[`${y}`]){
        if (xyVisited[`(${curX}, ${y})`]) {
            curX += dirX
            continue;
        } else xyVisited[`(${curX}, ${y})`] = true;

        const report = probe({x: curX, y: y}, target)
        
        if (report.nearest.x < target.xMin - targetWidth) {
            xLeft = true;
            dirX = 1;
        } else if (report.nearest.x > target.xMax + targetWidth) {
            xRight = true;
            dirX = -1;
        } 

        if (report.success) successCoords.push({coord: `(${curX}, ${y})`})
        curX += dirX

        if (xLeft && xRight) {            
            yVisited[`${y}`] = true;
            xLeft = false;
            xRight = false;
        }
    }
}
console.log(successCoords);