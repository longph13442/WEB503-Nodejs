import {Router} from "express";
import { create } from "../Controllers/category";
const router = Router();

router.post("/category", create);
// router.get("/category/:id", read);

export default router;