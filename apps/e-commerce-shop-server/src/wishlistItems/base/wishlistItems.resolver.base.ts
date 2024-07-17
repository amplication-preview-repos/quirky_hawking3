/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { WishlistItems } from "./WishlistItems";
import { WishlistItemsCountArgs } from "./WishlistItemsCountArgs";
import { WishlistItemsFindManyArgs } from "./WishlistItemsFindManyArgs";
import { WishlistItemsFindUniqueArgs } from "./WishlistItemsFindUniqueArgs";
import { CreateWishlistItemsArgs } from "./CreateWishlistItemsArgs";
import { UpdateWishlistItemsArgs } from "./UpdateWishlistItemsArgs";
import { DeleteWishlistItemsArgs } from "./DeleteWishlistItemsArgs";
import { Wishlist } from "../../wishlist/base/Wishlist";
import { Product } from "../../product/base/Product";
import { WishlistItemsService } from "../wishlistItems.service";
@graphql.Resolver(() => WishlistItems)
export class WishlistItemsResolverBase {
  constructor(protected readonly service: WishlistItemsService) {}

  async _wishlistItemsItemsMeta(
    @graphql.Args() args: WishlistItemsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WishlistItems])
  async wishlistItemsItems(
    @graphql.Args() args: WishlistItemsFindManyArgs
  ): Promise<WishlistItems[]> {
    return this.service.wishlistItemsItems(args);
  }

  @graphql.Query(() => WishlistItems, { nullable: true })
  async wishlistItems(
    @graphql.Args() args: WishlistItemsFindUniqueArgs
  ): Promise<WishlistItems | null> {
    const result = await this.service.wishlistItems(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WishlistItems)
  async createWishlistItems(
    @graphql.Args() args: CreateWishlistItemsArgs
  ): Promise<WishlistItems> {
    return await this.service.createWishlistItems({
      ...args,
      data: {
        ...args.data,

        wishlist: args.data.wishlist
          ? {
              connect: args.data.wishlist,
            }
          : undefined,

        product: args.data.product
          ? {
              connect: args.data.product,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => WishlistItems)
  async updateWishlistItems(
    @graphql.Args() args: UpdateWishlistItemsArgs
  ): Promise<WishlistItems | null> {
    try {
      return await this.service.updateWishlistItems({
        ...args,
        data: {
          ...args.data,

          wishlist: args.data.wishlist
            ? {
                connect: args.data.wishlist,
              }
            : undefined,

          product: args.data.product
            ? {
                connect: args.data.product,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WishlistItems)
  async deleteWishlistItems(
    @graphql.Args() args: DeleteWishlistItemsArgs
  ): Promise<WishlistItems | null> {
    try {
      return await this.service.deleteWishlistItems(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Wishlist, {
    nullable: true,
    name: "wishlist",
  })
  async getWishlist(
    @graphql.Parent() parent: WishlistItems
  ): Promise<Wishlist | null> {
    const result = await this.service.getWishlist(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Product, {
    nullable: true,
    name: "product",
  })
  async getProduct(
    @graphql.Parent() parent: WishlistItems
  ): Promise<Product | null> {
    const result = await this.service.getProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
