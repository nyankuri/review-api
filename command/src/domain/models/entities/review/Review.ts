import { Entity } from "../../Entity";
import { Identifier } from "../../Identifier";
import { Recommend } from "../../values/review/Recommend";
import { UserAction } from "../../values/UserAction";
import { Text } from "../../values/review/Text";
import { Product } from "./Product";
import { Version } from "../../values/Version";

export class Review implements Entity<Review, Id> {

  readonly id: Id;
  readonly product: Product;
  readonly recommend: Recommend<Review>;
  readonly text: Text<Review>;
  readonly userAction: UserAction;
  readonly version: Version<Review>;

  private constructor(id: string, productId: number, recommend: number, text: string, userAction: UserAction, version: string) {
    this.id = Id.of(id);
    this.product = Product.of(productId);
    this.recommend = Recommend.of(recommend);
    this.text = Text.of(text);
    this.userAction = userAction;
    this.version = Version.of(version);
  }

  static of(id: string, productId: number, recommend: number, text: string, userAction: UserAction, version: string): Review {
    return new Review(id, productId, recommend, text, userAction, version);
  }

  jsonOf(): string {
    const review = {
      id: this.id.value,
      product_id: this.product.id.value,
      recommend: this.recommend.value,
      text: this.text.value,
      user_action: this.userAction,
      version: this.version.value
    };
    return JSON.stringify(review);
  }

  equalTo(target: Review): boolean {
    return this.id.value === target.id.value;
  }
}

class Id implements Identifier<Review, string> {
  readonly value!: string;

  private constructor(id: string) {
    this.value = id;
  }

  static of(id: string): Id {
    return new Id(id);
  }

  equalTo(target: Identifier<Review, string>): boolean {
    return this.value === target.value;
  }

  hasValueOf(target: string): boolean {
    return this.value === target;
  }
}
