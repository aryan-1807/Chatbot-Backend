import express from 'express';
import cors from 'cors'
import { config } from "dotenv";
import { AiRouter } from './api/Ai/Ai.routes.mjs';
config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/v1', AiRouter)




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});