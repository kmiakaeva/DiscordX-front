/// <reference types="vite/client" />

interface ObjectConstructor {
  keys<T extends object>(o: T): Array<keyof T>;
}
