import express, { type Request, type Response } from 'express';

const app = express();

/**
 * IMPORTANT:
 * We must use raw body, NOT express.json()
 */
app.post(
  '/base64',
  express.raw({ type: '*/*' }),
  (req: Request, res: Response): void => {
    const buffer: Buffer = req.body as Buffer;
    const base64: string = buffer.toString('base64');
    console.log({
      buffer,
      base64,
    });
    res.json({
      length: buffer.length,
      base64,
    });
  },
);

app.listen(3000, (): void => {
  console.log('Server running on http://localhost:3000');
});
