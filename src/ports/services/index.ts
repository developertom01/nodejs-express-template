export * from "./IIntroService";
export interface IService<T = any> {
  work: () => T;
}
