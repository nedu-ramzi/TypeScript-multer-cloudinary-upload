import { Router } from "express";
import { handler } from "../middleware/multer.middleware";

const router = Router();

router.post('/upload', handler);

export const appRouter: Router = router;