import express from "express";
import AccountController from "../controller/AccountController";
const router = express.Router();

//POST
router.post("/login", AccountController.Login);

export default router;
