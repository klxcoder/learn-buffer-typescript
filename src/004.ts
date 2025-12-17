const buf: Buffer = Buffer.from('abc', 'base64');
console.log(buf); // <Buffer 69 b7>
const text: string = buf.toString('utf8');
console.log(text); // i�