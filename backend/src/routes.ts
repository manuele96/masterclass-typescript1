import { Router } from "express";
import userControllers from "./controllers/userControllers";
const routes = Router();
routes.get("/user", userControllers.index);
routes.post("/user", userControllers.create);
export default routes;
