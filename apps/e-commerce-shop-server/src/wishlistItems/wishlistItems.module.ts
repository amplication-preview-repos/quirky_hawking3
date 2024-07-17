import { Module } from "@nestjs/common";
import { WishlistItemsModuleBase } from "./base/wishlistItems.module.base";
import { WishlistItemsService } from "./wishlistItems.service";
import { WishlistItemsController } from "./wishlistItems.controller";
import { WishlistItemsResolver } from "./wishlistItems.resolver";

@Module({
  imports: [WishlistItemsModuleBase],
  controllers: [WishlistItemsController],
  providers: [WishlistItemsService, WishlistItemsResolver],
  exports: [WishlistItemsService],
})
export class WishlistItemsModule {}
