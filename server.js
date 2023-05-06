import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import router from './Routes/route.js';

const app = express();

app.use(express.json());
config();

const port = process.env.PORT || 8000;

app.use("/", router);

  mongoose
  .connect("mongodb://localhost:27017/quizz_app", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });





app.listen(port, () => {
  console.log(`Server connected to http://localhost:${port}`);
});
