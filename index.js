import express from 'express';
import cors from 'cors';

import dotenv from "dotenv";
import apiRoutes from './routes';
import dbConnect from './src/utils/db';
dotenv.config();

const app = express();

// DB Connect
dbConnect();

// CORs is required so that frontend can start consuming the apis
app.use(cors());
app.use(express.json());

const PORT = 5000;

// GET Request
app.get('/', (req, res) => {
  res.send({
    msg: "Book Api Endpoint"
  });
});

// REGISTER ROUTE MIDDLEWARES
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
})