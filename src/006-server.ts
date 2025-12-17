import express, { type Request, type Response } from 'express';

const app = express();

/**
 * IMPORTANT:
 * We must use raw body, NOT express.json()
 */
/** Binary-only endpoint */
app.post(
  '/base64',
  express.raw({ type: 'application/octet-stream' }),
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

/** JSON for normal APIs */
app.use(express.json());

/** JSON endpoint */
app.post(
  '/json',
  (req: Request, res: Response): void => {
    console.log({
      received: req.body,
      type: typeof req.body,
    });
    res.json({
      received: req.body,
      type: typeof req.body,
    });
  },
);

app.listen(3000, (): void => {
  console.log('Server running on http://localhost:3000');
});
