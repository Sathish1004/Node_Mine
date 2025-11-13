import express from "express";
import Film from "../Backend/routes/Film.js";
import dotevn from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";

dotevn.config();

const hello = express();

connectDb();
hello.use(cors());
hello.use(express.json());
const port = process.env.PORT || 5000;

hello.use("/api/auth", Film);

hello.listen(port, () => {
  console.log(` server is Glowing http://localhost:${port}`);
});

// server running :  http://localhost:3000

// http://localhost:3000/api/auth
