const { hexToBin } = require('../lib/hexToBin');

const text = require('./input.txt');
export {}

interface Packet {
    version: number;
    typeID: number;
    payload?: number;
    children?: Packet[];
    binLength?: number;
}

const charArr = text.default.split("");
const binInput = charArr.map((char:string) => hexToBin[char]).join("");

function parseBin(bin:string):Packet {
    if (bin.length < 11) return null;
    let input = [...bin.split("")]
    let version = parseInt(input.slice(0, 3).join(""), 2);
    let typeID = parseInt(input.slice(3, 6).join(""), 2);
    input.splice(0, 6);

    // Literal value
    if (typeID === 4) {
        const bitArr = []
        while (true) {
            bitArr.push(input.slice(1, 5).join(""))
            if (input[0] === "0") {
                input.splice(0, 5);
                return {version, typeID, binLength: (bitArr.length * 5) + 6, payload: parseInt(bitArr.join(""), 2)}
            }
            input.splice(0, 5);
        }
    }

    // Operator packet
    else {
        const lengthTypeID = input.shift();
        const packetArr = []
        let binLength;

        if (lengthTypeID === "0") {
            let subPackBinLength = parseInt(input.splice(0, 15).join(""), 2);
            while (subPackBinLength > 0) {
                let result = parseBin(input.slice(0, subPackBinLength).join(""))
                packetArr.push(result);
                subPackBinLength -= result.binLength;
                input.splice(0, result.binLength)
            }
            binLength = packetArr.reduce((a, b) => a + b.binLength, 0) + 22;

        } else {
            let numberOfSubPackets = parseInt(input.splice(0, 11).join(""), 2);
            while (numberOfSubPackets > 0) {
                let result = parseBin(input.join(""));
                input.splice(0, result.binLength);
                packetArr.push(result);
                numberOfSubPackets--;
            }
            binLength = packetArr.reduce((a, b) => a + b.binLength, 0) + 18;
        }
        return {version, typeID, children: packetArr, binLength, payload: evalChildren(packetArr, typeID)}
    }
}

function evalChildren(arr:Packet[], typeID:number):number {
    switch(typeID) {
        case 0:
            return arr.reduce((p:number, c:Packet) => p + c.payload, 0)
        case 1:
            return arr.reduce((p:number, c:Packet) => p * c.payload, 1)
        case 2:
            return arr.reduce((p:number, c:Packet) => Math.min(p, c.payload), Infinity)
        case 3:
            return arr.reduce((p:number, c:Packet) => Math.max(p, c.payload), 0)
        case 5:
            return arr[0].payload > arr[1].payload ? 1 : 0
        case 6:
            return arr[0].payload < arr[1].payload ? 1 : 0
        case 7:
            return arr[0].payload === arr[1].payload ? 1 : 0
        default:
            return null
    }
}

parseBin(binInput);
console.log("output:", parseBin(binInput));