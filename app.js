import express from 'express';
const app = express();

import todoRouter from './todo/todo-router';

app.use(express.json());

app.use('/todos', todoRouter);

app.get('/', (req, res) => {
  res.send('hello from express server');
});

export default app;
