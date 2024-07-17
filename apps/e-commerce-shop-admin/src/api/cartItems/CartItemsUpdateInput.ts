import { ShoppingCartWhereUniqueInput } from "../shoppingCart/ShoppingCartWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type CartItemsUpdateInput = {
  cartItemId?: number | null;
  quantity?: number | null;
  shoppingCart?: ShoppingCartWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
