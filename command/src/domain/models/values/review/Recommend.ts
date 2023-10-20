import { DomainObject } from "../../DomainObject";
import { Value } from "../../Value";

export class Recommend<D extends DomainObject<D>> implements Value<Recommend<D>> {

  readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static of<O extends DomainObject<O>>(recommend: number): Recommend<O> {
    return new Recommend(recommend.toString());
  }

  equalTo(target: Recommend<D>): boolean {
    return this.value === target.value;
  }  
}
