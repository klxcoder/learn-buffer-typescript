const text: string = 'abc';

const response: Response = await fetch('http://localhost:3000/json', {
  method: 'POST',
  headers: {
    // Important, otherwise req.body will be undefined
    'Content-Type': 'application/json',
  },
  // body: text, // errors
  // body: JSON.stringify(text), // errors
  body: JSON.stringify({ // ok
    text,
  }),
});

console.log(await response.json());