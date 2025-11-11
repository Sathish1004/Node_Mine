import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authroutes from "./routes/authroutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authroutes)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);

});
