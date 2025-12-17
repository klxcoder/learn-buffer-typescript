import { readFileSync } from "node:fs";
const data: Buffer = readFileSync('input.txt');
console.log(data[0]); // 97