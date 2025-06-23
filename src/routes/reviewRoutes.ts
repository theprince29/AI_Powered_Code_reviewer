import { Router } from "express";
import { reviewCode } from "../controllers/reviewController";

const router = Router();
router.post("/review", (req, res, next) => {
  Promise.resolve(reviewCode(req, res, next)).catch(next);
});

export default router;