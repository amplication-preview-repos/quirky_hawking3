import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type WishlistItemsCreateInput = {
  wishlistItemId?: number | null;
  wishlist?: WishlistWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
