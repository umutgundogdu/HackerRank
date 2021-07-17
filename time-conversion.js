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

function timeConversion(s) {
    let ampm = s.substring(s.length - 2);
    let time = s.substring(2, s.length - 2);
    let hour = s.substring(0, 2);

    if (ampm === "AM" && hour === "12") {
        hour = "00";
    }
    if (ampm === "PM" && hour !== "12") {
        hour = parseInt(hour) + 12;
    }
    time = hour + time;
    return time;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
