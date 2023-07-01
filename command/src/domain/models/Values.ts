import { DomainObject } from "./DomainObject";

export interface Value<V extends Value<V>> extends DomainObject<V> {
	readonly value: string;
	equalTo(target: V): boolean;
}
