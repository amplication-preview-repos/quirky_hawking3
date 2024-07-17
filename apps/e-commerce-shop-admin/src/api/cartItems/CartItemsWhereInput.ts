import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ShoppingCartWhereUniqueInput } from "../shoppingCart/ShoppingCartWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartItemsWhereInput = {
  id?: StringFilter;
  cartItemId?: IntNullableFilter;
  quantity?: IntNullableFilter;
  shoppingCart?: ShoppingCartWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
