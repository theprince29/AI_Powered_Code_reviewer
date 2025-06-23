import { Router } from "express";
import { reviewCode } from "../controllers/reviewController";

const router = Router();
router.post("/review", reviewCode);

export default router;