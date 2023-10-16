import { Router } from "express";
import { handler } from "../middleware/multer.middleware";

export const router = Router();

router.post('/upload', handler);