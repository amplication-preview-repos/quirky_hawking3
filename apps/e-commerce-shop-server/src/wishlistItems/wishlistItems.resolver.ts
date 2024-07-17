import * as graphql from "@nestjs/graphql";
import { WishlistItemsResolverBase } from "./base/wishlistItems.resolver.base";
import { WishlistItems } from "./base/WishlistItems";
import { WishlistItemsService } from "./wishlistItems.service";

@graphql.Resolver(() => WishlistItems)
export class WishlistItemsResolver extends WishlistItemsResolverBase {
  constructor(protected readonly service: WishlistItemsService) {
    super(service);
  }
}
