import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WishlistWhereUniqueInput } from "../wishlist/WishlistWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type WishlistItemsWhereInput = {
  id?: StringFilter;
  wishlistItemId?: IntNullableFilter;
  wishlist?: WishlistWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
