'use strict';

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


function staircase(n) {
    let m = n - 1;
    for (let i = 1; i < n + 1; i++, m--) {
        let s = "";
        for (let a = 0; a < m; a++) {
            s += " ";
        }
        for (let b = 0; b < i; b++) {
            s += "#";
        }
        console.log(s);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
