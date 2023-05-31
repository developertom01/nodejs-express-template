export interface IController<T> {
  request: (...args: any[]) => T;
}
