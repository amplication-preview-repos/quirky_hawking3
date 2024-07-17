import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WishlistItemsListRelationFilter } from "../wishlistItems/WishlistItemsListRelationFilter";

export type WishlistWhereInput = {
  id?: StringFilter;
  wishlistId?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  wishlistItemsItems?: WishlistItemsListRelationFilter;
};
