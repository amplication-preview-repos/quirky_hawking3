import * as graphql from "@nestjs/graphql";
import { ShoppingCartResolverBase } from "./base/shoppingCart.resolver.base";
import { ShoppingCart } from "./base/ShoppingCart";
import { ShoppingCartService } from "./shoppingCart.service";

@graphql.Resolver(() => ShoppingCart)
export class ShoppingCartResolver extends ShoppingCartResolverBase {
  constructor(protected readonly service: ShoppingCartService) {
    super(service);
  }
}
