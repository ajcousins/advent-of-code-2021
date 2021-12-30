const text = require('./input_test.txt');
export {}

console.log("Day 18");

interface Node {
    val: number | null;
    left: Node;
    right: Node;
}

interface BinaryTree {
    root: Node;
    startString: string;
}

class Node {
    constructor() {
        this.val = null;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(start: string) {
        this.root = null;
        this.startString = start;
        this.initiate(start);
    }
    initiate(start: string) {
        console.log("Start here:", start);
        const cmds = start.split("");
        console.log(cmds);
        const root = new Node();
        this.root = root
        for (let i = 0; i < cmds.length; i++) {
            if (cmds[i] === "[") {
                this.pushLeft(cmds.slice(i + 1), root.left)
            }
        }
    }
    pushLeft(cmds: string[], node: Node) {
        console.log("pushLeft:", cmds);
        node = new Node();
        // left.left = newLeft;
        if (cmds[0] === "[") {
            
            this.pushLeft(cmds.slice(1), node)
        }
        else if (cmds[0] === "]") {
            // TO DO
        }
        else if (cmds[0] === ",") {
            // TO DO
        }
        else {
            // IS NUMBER
            console.log("Here", cmds[0]);
            
            node.val = Number(cmds[0]);
            console.log(node);
            
        }
    }
}

// const firstTree = new BinaryTree();
// firstTree.root = new Node(null);
// firstTree.root.left = new Node(1);
// firstTree.root.right = new Node(2);
// console.log("firstTree:", firstTree);

const secondTree = new BinaryTree("[1,2]");

console.log("secondTree:", secondTree);
