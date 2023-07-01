import { Identifiable } from "./Identifiable";

export interface Identifier<O, V> extends Identifiable<Identifier<O, V>> {
  value: V;
  equalTo(target: Identifier<O, V>): boolean;
  hasValueOf(target: V): boolean;
}
