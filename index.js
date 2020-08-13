// Epic: Find the maximum amount of toys (prices array) Mark can purchase with k dollars.

// maximumToys has the following parameters:
// prices: an array of integers
// budget single integer

// .sort() prices as ascending values
// iterate thorugh prices
// add prices together unitl we reach our budget limit
// return how many toys Mark can buy

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the maximumToys function below.
function maximumToys(prices, budget) {
   prices = prices.sort((a, b) => a - b)
   let counter = 0;
   let totalToys = 0; 

   prices.forEach((toy, index) => {
    counter += toy 
    if(counter <= budget) {
       totalToys = index + 1    
    }  

   })
   return totalToys;

  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
