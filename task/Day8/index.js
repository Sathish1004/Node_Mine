import exprees from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import strRoute from "./routes/strRoute.js";
import cors from "cors";

dotenv.config();

connectDb();

const mydemo = exprees();

const PORT = process.env.PORT || 5000;
mydemo.use(exprees.json());
mydemo.use(cors());
mydemo.use("/api/auth", strRoute);
mydemo.listen(PORT, () => {
  console.log(`server is running at port https://localhost:${PORT}`);
});

// user_name :  sathishj0423_db_user
//  password :   IhSSd2C5As6olhMw

//  mongodb+srv://sathishj0423_db_user:IhSSd2C5As6olhMw@cluster0.gihfonx.mongodb.net/sathish?appName=Cluster0

// mongodb+srv://sathishj0423_db_user:<db_password>@cluster0.gihfonx.mongodb.net/?appName=Cluster0