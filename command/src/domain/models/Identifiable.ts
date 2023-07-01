export interface Identifiable<T extends Identifiable<T>> {
  equalTo(target: T): boolean;
}
