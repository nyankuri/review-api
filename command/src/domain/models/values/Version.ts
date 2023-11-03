import { DomainObject } from "../DomainObject";
import { Value } from "../Value";

export class Version<D extends DomainObject<D>> implements Value<Version<D>> {

  readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  versionUp<O extends DomainObject<O>>(): Version<O> {
    const newVersion = parseInt(this.value) + 1;
    return new Version(newVersion.toString());
  }

  static of<O extends DomainObject<O>>(version: string): Version<O> {
    return new Version(version);
  }

  equalTo(target: Version<D>): boolean {
    return this.value === target.value;
  }
}
