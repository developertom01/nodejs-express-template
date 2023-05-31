export interface ICollection<T> {
  toJSON: () => T;
}
