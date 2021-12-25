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
    highestY: number;
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

function probe(sVel:Coord, target:Area, curPos?:Coord, highestY?:number):Report {
    // SET EMPTY PARAMS
    if (!curPos) curPos = {x: 0, y: 0};
    if (!highestY) highestY = curPos.y;

    // ARE WE THERE YET?
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
    && curPos.y >= target.yMin && curPos.y <= target.yMax) {
        return { success: true, highestY: highestY }
    };
    
    // UPDATE STATS
    const newPos = {...curPos};
    newPos.x += sVel.x;
    newPos.y += sVel.y;

    const newVel = {...sVel};
    if (sVel.x > 0) newVel.x -= 1;
    if (sVel.x < 0) newVel.x += 1;
    newVel.y -= 1;

    if (newPos.y > highestY) highestY = newPos.y;

    console.log("newPos:", newPos, "newVel:", newVel, "highestY:", highestY);

    // HAVE WE MISSED?
    const prevYFromTarget = Math.abs(curPos.y - target.yMin);
    const curYFromTarget = Math.abs(newPos.y - target.yMin);

    if (sVel.y < 0 && curYFromTarget > prevYFromTarget) 
        return { success: false, highestY: highestY }
    
    if (newPos.x > target.xMax)
        return { success: false, highestY: highestY }

    return probe(newVel, target, newPos, highestY);
}


const sVelToTry:Coord[] = [];

const tries:any = []

const yLimit = 100;

for (let y = 1; y <= yLimit; y++) {
    for (let x = 1; x <= y; x++) {
        sVelToTry.push({x, y})
    }
}

sVelToTry.forEach((vel:Coord) => {
    const report = probe({x: vel.x, y: vel.y}, target)
    if (report.success) {

        tries.push({sVel: vel, highestY: report.highestY})
    }
})

console.log(tries);