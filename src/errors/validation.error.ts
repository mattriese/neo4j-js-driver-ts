export default class ValidationError extends Error {
  details: any;
  constructor(message: string, details: any, private code: number = 422) {
    super(message);

    this.code = 422;
    this.details = details;
  }
}
