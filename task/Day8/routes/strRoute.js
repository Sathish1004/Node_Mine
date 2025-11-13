import exprees from 'express';
import { getstr } from "../controller/strController.js";

const routes=exprees.Router();

routes.post("/datas",getstr)

export default routes;

  // http://localhost:3000/api/auth/datas