import express from "express";
import {
  authcontroller,
  headercontroller,
  paramscontroller,
  querycontroller,
} from "../controller/authcontroller.js";

const authroutes = express.Router();
authroutes.post("/datas", authcontroller);
// route now accepts a user_id path parameter so req.params.user_id is available
authroutes.get("/user_id/:user_id", paramscontroller);

authroutes.get("/hello",querycontroller)

authroutes.get("/headers",headercontroller);
export default authroutes;





//  http://localhost:3000/api/auth/datas  ->body
//  http://localhost:3000/api/auth/user_id/ --> params
//  http://localhost:3000/api/auth/hello -->query

