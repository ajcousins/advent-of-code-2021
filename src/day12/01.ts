const text = require('./input_test.txt');
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
}

const inputList = text.default.split("\n")

console.log(inputList);

const caveGraph = new Graph();

inputList.forEach((line:string) => {
    const vertexes = line.split("-")
    vertexes.forEach((vertex:string) => {
        caveGraph.addVertex(vertex);
    })
    caveGraph.addEdge(vertexes[0], vertexes[1]);
})

console.log("caveGraph:", caveGraph);
