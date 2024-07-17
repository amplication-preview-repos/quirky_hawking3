/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  WishlistItems as PrismaWishlistItems,
  Wishlist as PrismaWishlist,
  Product as PrismaProduct,
} from "@prisma/client";

export class WishlistItemsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WishlistItemsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.wishlistItems.count(args);
  }

  async wishlistItemsItems(
    args: Prisma.WishlistItemsFindManyArgs
  ): Promise<PrismaWishlistItems[]> {
    return this.prisma.wishlistItems.findMany(args);
  }
  async wishlistItems(
    args: Prisma.WishlistItemsFindUniqueArgs
  ): Promise<PrismaWishlistItems | null> {
    return this.prisma.wishlistItems.findUnique(args);
  }
  async createWishlistItems(
    args: Prisma.WishlistItemsCreateArgs
  ): Promise<PrismaWishlistItems> {
    return this.prisma.wishlistItems.create(args);
  }
  async updateWishlistItems(
    args: Prisma.WishlistItemsUpdateArgs
  ): Promise<PrismaWishlistItems> {
    return this.prisma.wishlistItems.update(args);
  }
  async deleteWishlistItems(
    args: Prisma.WishlistItemsDeleteArgs
  ): Promise<PrismaWishlistItems> {
    return this.prisma.wishlistItems.delete(args);
  }

  async getWishlist(parentId: string): Promise<PrismaWishlist | null> {
    return this.prisma.wishlistItems
      .findUnique({
        where: { id: parentId },
      })
      .wishlist();
  }

  async getProduct(parentId: string): Promise<PrismaProduct | null> {
    return this.prisma.wishlistItems
      .findUnique({
        where: { id: parentId },
      })
      .product();
  }
}
