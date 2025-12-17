const buf: Buffer = Buffer.from('abc', 'utf8');
console.log(buf); // <Buffer 61 62 63>

// binary safe transport
const b64: string = buf.toString('base64');
console.log(b64); // YWJj
const back: Buffer = Buffer.from(b64, 'base64');
console.log(back); // <Buffer 61 62 63>