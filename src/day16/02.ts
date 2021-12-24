const { hexToBin } = require('../lib/hexToBin');

const text = require('./input_test.txt');
export {}



interface Packet {
    version: number;
    typeID: number;
    payload?: number | string;
    children?: Packet[];
    binLength?: number;
}



const charArr = text.default.split("");

const binInput = charArr.map((char:string) => hexToBin[char]).join("");
console.log(binInput);

// const output:Packet[] = [];

function parseBin(bin:string, packetCount?:number):Packet {
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
        if (lengthTypeID === "0") {
            let subPackBinLength = parseInt(input.splice(0, 15).join(""), 2);
            const packetArr = []

            while (subPackBinLength > 0) {
                let result = parseBin(input.slice(0, subPackBinLength).join(""))
                packetArr.push(result);
                subPackBinLength -= result.binLength;
                input.splice(0, result.binLength)
            }
            const binLength = packetArr.reduce((a, b) => a + b.binLength, 0) + 22;

            return {version, typeID, children: packetArr, binLength}

        } 
        else {
            let numberOfSubPackets = parseInt(input.splice(0, 11).join(""), 2);
            const packetArr = []

            while (numberOfSubPackets > 0) {
                let result = parseBin(input.join(""));
                input.splice(0, result.binLength);
                packetArr.push(result);
                numberOfSubPackets--;
            }
            const binLength = packetArr.reduce((a, b) => a + b.binLength, 0) + 18;

            return {version, typeID, children: packetArr, binLength}

        }
    }
}
parseBin(binInput);

console.log("output:", parseBin(binInput));

// const versionSum = output.reduce((p:number, c:Packet) => c.version + p, 0)
// console.log("versionSum:", versionSum);