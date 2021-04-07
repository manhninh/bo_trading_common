import { NextFunction, Request, Response } from 'express';
declare const notFoundMiddleware: (req: Request, res: Response) => void;
declare const errorMiddleware: (err: any, req: Request, res: Response, _next: NextFunction) => void;
export { notFoundMiddleware, errorMiddleware };
