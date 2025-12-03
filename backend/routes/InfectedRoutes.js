import express from "express";

import {
  getInfecteds,
  getInfectedById,
  createInfected,
  updateInfected,
  deleteInfected
} from "../controllers/InfectedController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getInfecteds);
router.get("/:id", getInfectedById);

router.post("/", auth, createInfected);
router.put("/:id", auth, updateInfected);
router.delete("/:id", auth, deleteInfected);

export default router;