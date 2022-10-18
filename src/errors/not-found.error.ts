export default class NotFoundError extends Error {
  constructor(message: string, public code: number = 404) {
    super(message);
    this.code = 404;
  }
}
