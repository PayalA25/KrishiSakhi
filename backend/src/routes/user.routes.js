import { Router } from "express";
import {
  loginUser,
  
 registerUser, 

} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;

