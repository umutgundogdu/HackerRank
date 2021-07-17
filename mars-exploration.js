'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function marsExploration(s) {
    const ar = s.split("");
    let a = 0;
    for (let i = 0; i < s.length; i++) {
        if (!(i % 3 == 0 && ar[i] === "S") && !(i % 3 == 1 && ar[i] === "O") && !(i % 3 == 2 && ar[i] === "S")) {
            a++;
        }
    }
    return a;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
