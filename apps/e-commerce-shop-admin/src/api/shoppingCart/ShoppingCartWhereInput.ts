import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CartItemsListRelationFilter } from "../cartItems/CartItemsListRelationFilter";

export type ShoppingCartWhereInput = {
  id?: StringFilter;
  cartId?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  cartItemsItems?: CartItemsListRelationFilter;
};
