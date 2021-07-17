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

function arrSum(arr, start, stop) {
    let result = 0;
    for (let i = start; i < stop; i++) {
        result += arr[i];
    }
    return result;
}

function miniMaxSum(arr) {
    arr.sort();
    let size = arr.length;
    console.log(arrSum(arr, 0, size - 1) + " " + arrSum(arr, 1, size));
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
