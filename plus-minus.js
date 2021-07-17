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

function plusMinus(arr) {
    let size = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < size; i++) {
        if (arr[i] > 0) {
            positive++
        } else if (arr[i] < 0) {
            negative++
        } else {
            zero++
        }
    }
    console.log(positive / size);
    console.log(negative / size);
    console.log(zero / size);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
