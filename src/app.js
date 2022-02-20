import express from 'express';
import dotenv from 'dotenv';

import contactRoutes from './routes/contacts-routes';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contacts', contactRoutes);

app.get('*', (req, res) => {
  res.send('Route does not exist');
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => res.status(500).json({
  message: error.message,
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log('server is listening on', PORT);
});
