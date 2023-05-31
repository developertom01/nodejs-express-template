export * from "./IIntroService";
export interface IService<T = any> {
  apply: () => T;
}
