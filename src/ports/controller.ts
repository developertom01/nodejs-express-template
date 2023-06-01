export interface IController<T> {
  request: (...args: any[]) => T;
}

export interface IResolver<T> {
  resolve: (source: any, args: any, ...rest: any[]) => T;
}
