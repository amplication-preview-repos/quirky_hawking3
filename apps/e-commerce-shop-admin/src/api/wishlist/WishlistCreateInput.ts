import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistItemsCreateNestedManyWithoutWishlistsInput } from "./WishlistItemsCreateNestedManyWithoutWishlistsInput";

export type WishlistCreateInput = {
  wishlistId?: number | null;
  user?: UserWhereUniqueInput | null;
  wishlistItemsItems?: WishlistItemsCreateNestedManyWithoutWishlistsInput;
};
