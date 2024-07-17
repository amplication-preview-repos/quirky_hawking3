import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WishlistItemsService } from "./wishlistItems.service";
import { WishlistItemsControllerBase } from "./base/wishlistItems.controller.base";

@swagger.ApiTags("wishlistItems")
@common.Controller("wishlistItems")
export class WishlistItemsController extends WishlistItemsControllerBase {
  constructor(protected readonly service: WishlistItemsService) {
    super(service);
  }
}
