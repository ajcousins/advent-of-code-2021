const text = require('./input.txt');
export {}

interface Hash {
    [key:string]: string;
}

interface Packet {
    version: number;
    typeID: number;
    payload?: number | string;
}

const hexToBin:Hash = {
    "0": "0000",
    "1": "0001",
    "2": "0010",
    "3": "0011",
    "4": "0100",
    "5": "0101",
    "6": "0110",
    "7": "0111",
    "8": "1000",
    "9": "1001",
    "A": "1010",
    "B": "1011",
    "C": "1100",
    "D": "1101",
    "E": "1110",
    "F": "1111",
}

const charArr = text.default.split("");

const binInput = charArr.map((char:string) => hexToBin[char]).join("");
console.log(binInput);

const output:Packet[] = [];

function parseBin(bin:string):null {
    if (bin.length < 11) return null;
    let input = [...bin.split("")]
    let version = parseInt(input.slice(0, 3).join(""), 2);
    let typeID = parseInt(input.slice(3, 6).join(""), 2);
    input.splice(0, 6);

    // console.log(`Input: ${input}, version: ${version}, typeID: ${typeID}`);
    // Literal value
    if (typeID === 4) {
        const bitArr = []
        while (true) {
            bitArr.push(input.slice(1, 5).join(""))
            if (input[0] === "0") {
                input.splice(0, 5);
                output.push({version, typeID, payload: parseInt(bitArr.join(""), 2)})
                parseBin(input.join(""));
                break
            }
            input.splice(0, 5);
        }
    }
    // Operator packet
    else {
        const lengthTypeID = input.shift();
        if (lengthTypeID === "0") {
            let subPackBinLength = parseInt(input.splice(0, 15).join(""), 2);
            output.push({version, typeID, payload: `subPacketBinaryLength: ${subPackBinLength}`})
            parseBin(input.slice(0, subPackBinLength).join(""));
            input.splice(0, subPackBinLength)
            parseBin(input.join(""));
        } else {
            let numberOfSubPackets = parseInt(input.splice(0, 11).join(""), 2);
            output.push({version, typeID, payload: `numberOfSubPackets: ${numberOfSubPackets}`})
            parseBin(input.join(""));
        }
    }
}
parseBin(binInput);

console.log("output:", output);

const versionSum = output.reduce((p:number, c:Packet) => c.version + p, 0)
console.log("versionSum:", versionSum);