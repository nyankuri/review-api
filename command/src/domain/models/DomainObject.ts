export interface DomainObject<D extends DomainObject<D>> {
  equalTo(target: D): boolean;
}
