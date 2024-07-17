import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistItemsUpdateManyWithoutWishlistsInput } from "./WishlistItemsUpdateManyWithoutWishlistsInput";

export type WishlistUpdateInput = {
  wishlistId?: number | null;
  user?: UserWhereUniqueInput | null;
  wishlistItemsItems?: WishlistItemsUpdateManyWithoutWishlistsInput;
};
