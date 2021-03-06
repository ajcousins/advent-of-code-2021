const text = require('./input.txt');
export {}

interface Graph {
    adjacencyList: {
        [key: string]: string[]
    }
}

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(vertex:string) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    addEdge(v1:string, v2:string) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    findPaths(start:string) {
        const allPossPaths:string[][] = [];
        const startingPath:string[] = [];
        const startingVisited:{[key:string]:boolean} = {}
        const adjList = this.adjacencyList;

        function helper(current:string, pathSoFar:string[], visited:any):null {
            const pathCopy = [...pathSoFar, current];
            const visitedCopy = {...visited};
            if (current.charAt(0) === current.charAt(0).toLowerCase()) {
                visitedCopy[current] = true;
            }
            // base case
            if (current === "end") {
                allPossPaths.push(pathCopy);
                return null;
            }

            const toVisit:string[] = [];
            adjList[current].forEach((dest:string) => {
                if (!visitedCopy[dest]) toVisit.push(dest)
            })
            if (!toVisit.length) return null;

            toVisit.forEach((dest:string) => {
                helper(dest, pathCopy, visitedCopy)
            })
        }
        helper(start, startingPath, startingVisited)

        return allPossPaths;
    }
}

const inputList = text.default.split("\n")
const caveGraph = new Graph();

inputList.forEach((line:string) => {
    const vertexes = line.split("-")
    vertexes.forEach((vertex:string) => {
        caveGraph.addVertex(vertex);
    })
    caveGraph.addEdge(vertexes[0], vertexes[1]);
})

console.log(inputList);
console.log("caveGraph:", caveGraph);
console.log("caveGraph.findPaths('start'):", caveGraph.findPaths('start'));