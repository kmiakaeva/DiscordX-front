/// <reference types="vite/client" />

interface ObjectConstructor {
  keys<T extends object>(o: T): Array<keyof T>;
  entries<T extends objects>(o: T): Array<[keyof T, T[keyof T]]>;
}
