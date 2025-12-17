const buffer: Buffer = Buffer.from('abc', 'utf8');

const response: Response = await fetch('http://localhost:3000/base64', {
  method: 'POST',
  headers: {
    // Important, otherwise req.body will be undefined
    'Content-Type': 'application/octet-stream',
  },
  body: buffer,
});

console.log(await response.json());