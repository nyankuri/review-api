import crypto from "crypto";
import { Value } from "../Value";

export class Crypto implements Value<Crypto> {
  readonly value: string;

  private constructor(uuid: string) {
    this.value = uuid;
  }

  public static of(): Crypto {
    return new Crypto(crypto.randomUUID());
  }

  equalTo(target: Crypto): boolean {
    return this.value === target.value;
  }
}
