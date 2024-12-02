import express from "express";
import { getData } from "../../controller/user.controller.js";
const router = express.Router();

// user routes
router.get("/", getData)

export default router;

