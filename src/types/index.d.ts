export {};

declare global {
  namespace Express {
    interface Request {
      transaction: any;
    }
  }
}
