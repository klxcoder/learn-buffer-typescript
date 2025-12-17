const buf: Buffer = Buffer.from('abc', 'utf8');
const text: string = buf.toString('utf8');
console.log(text); // 'abc'
console.log(text === 'abc'); // true