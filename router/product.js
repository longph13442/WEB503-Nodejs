import {Router} from "express";
import { list, read, remove, update,creat } from "../Controllers/product";
const router= Router(); 
import {check} from "../middlewares/checkAuth";
// get all
router.get("/products",check,list);

// get 1 gias trị
router.get("/product/:id", check,read);

// delete
router.delete("/product/:id", check, remove);

//post
router.post("/products",check,creat);
// update
router.put("/product/:id", check, update);

export default router;