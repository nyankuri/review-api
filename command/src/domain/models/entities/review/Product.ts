import { Entity } from "../../Entity";
import { Identifier } from "../../Identifier";

export class Product implements Entity<Product, Id> {
  readonly id: Id;

  private constructor(id: string) {
    this.id = Id.of(id);
  }

  static of(id: number): Product {
    return new Product(id.toString());
  }

  equalTo(target: Product): boolean {
    return this.id.value === target.id.value;
  }
}

class Id implements Identifier<Product, string> {
  readonly value!: string;

  private constructor(id: string) {
    this.value = id;
  }

  static of(id: string): Id {
    return new Id(id);
  }

  equalTo(target: Identifier<Product, string>): boolean {
    return this.value === target.value;
  }

  hasValueOf(target: string): boolean {
    return this.value === target;
  }
}
