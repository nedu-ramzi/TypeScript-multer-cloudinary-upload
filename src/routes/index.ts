import { Router } from 'express';
import { handler } from '../middleware/multer.middleware';
import { registerValidationMiddleware } from '../middleware/register.middleware';
import { register, getAllUser } from '../controllers/user.controller';

const appRouter = Router();

appRouter.post('/upload', handler);
appRouter.post('/register', registerValidationMiddleware, register);

appRouter.get('/users', getAllUser)

export default appRouter;
