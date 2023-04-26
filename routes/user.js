import express from "express";
import {
  getAllUsers,
  getDynamicUserID,
  getNewUsers,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", getNewUsers);
router.post("/userId/:id", getDynamicUserID);

export default router;
