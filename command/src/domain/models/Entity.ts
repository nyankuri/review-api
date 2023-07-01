import { DomainObject } from './DomainObject';
import { Identifier } from './Identifier';

export interface Entity<E extends Entity<E, I>, I extends Identifier<E, unknown>> extends DomainObject<E> {
  readonly id: I;
}
