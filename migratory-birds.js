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

function migratoryBirds(arr) {

    const d = {}

    for (const a of arr) {
        let b = d[a]
        if (b == undefined) {
            b = 0
        }
        b++
        d[a] = b
    }

    let max = 0
    let k = null

    for (const [key, value] of Object.entries(d)) {
        if (value > max || (value == max && (k == null || key < k))) {
            max = value
            k = key
        }
    }
    return k
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
