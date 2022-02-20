import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log('server is listening on', PORT);
});
