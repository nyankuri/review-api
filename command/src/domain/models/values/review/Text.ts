import { DomainObject } from "../../DomainObject";
import { Value } from "../../Value";

export class Text<D extends DomainObject<D>> implements Value<Text<D>> {

  readonly value: string

  private constructor(value: string) {
    this.value = value;
  }

  static of<O extends DomainObject<O>>(text: string): Text<O> {
    return new Text(text);
  }

  equalTo(target: Text<D>): boolean {
    return this.value === target.value;
  }
}
