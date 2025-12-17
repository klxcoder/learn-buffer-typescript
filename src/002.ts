import { readFileSync } from "node:fs";
const data: Buffer = readFileSync('input.txt');
console.log(data); // <Buffer 61 62 63>