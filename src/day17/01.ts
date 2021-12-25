const text = require('./input_test.txt');
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

function probe(sVel:Coord, curPos:Coord, target:Area, steps:number):boolean {
    if (curPos.x >= target.xMin && curPos.x <= target.xMax
    && curPos.y >= target.yMin && curPos.y <= target.yMax) return true;
    if (steps === 0) return false;

    const newPos = {...curPos};
    newPos.x += sVel.x;
    newPos.y += sVel.y;

    const newVel = {...sVel};
    if (sVel.x > 0) newVel.x -= 1;
    if (sVel.x < 0) newVel.x += 1;
    newVel.y -= 1;

    console.log("newPos:", newPos, "newVel:", newVel);
    return probe(newVel, newPos, target, steps - 1);
}
console.log(probe({x:9, y:0}, {x:0, y:0}, target, 20));

/*
- try to get rid of 'steps' in function. Get function to determine if it has missed target
- if curPos.y is increasing: keep going
- if curPos.y is decreasing, and distance to target is decreasing: keep going
- if curPos.x is greater than target.xMax: stop
*/