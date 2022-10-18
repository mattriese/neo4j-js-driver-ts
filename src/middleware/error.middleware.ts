import { Request, Response, NextFunction } from 'express';
/**
 * Generic error handler.  Output error details as JSON.
 *
 * WARNING: You shouldn't do this in a production environment in any circumstances
 *
 * @param {Error} error
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
interface Error {
  code?: string;
  message?: string;
  trace?: any;
  details?: any;
}
export default function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(error);

  res.send(error.code || 500).json({
    status: 'error',
    code: error.code || 500,
    message: error.message,
    trace: error.trace,
    details: error.details,
  });
}
