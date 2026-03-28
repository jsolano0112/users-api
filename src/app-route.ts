import { Router, Request, Response } from 'express';
import { authRouter, userRouter } from './user/application/routes/user.route';

const appRouter: Router = Router();

appRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: 'USERS - API',
  });
});

appRouter.use('/api/v1/users', userRouter);
appRouter.use('/api/v1/auth', authRouter);

export default appRouter;
