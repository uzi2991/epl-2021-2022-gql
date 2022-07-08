export type FilterFunctions<T, P> = {
  [K in keyof T]: (item: P, input: T[K]) => boolean;
};
