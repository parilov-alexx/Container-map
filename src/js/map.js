export default class ErrorRepository {
  constructor() {
    this.codes = new Map();
    this.codes.set(404, 'page not found');
  }

  translate(code) {
    if (this.codes.get(code) === undefined) {
      return 'Unknown error';
    } return this.codes.get(code);
  }
}
