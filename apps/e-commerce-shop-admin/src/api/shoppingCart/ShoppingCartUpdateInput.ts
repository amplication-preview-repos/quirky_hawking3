import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CartItemsUpdateManyWithoutShoppingCartsInput } from "./CartItemsUpdateManyWithoutShoppingCartsInput";

export type ShoppingCartUpdateInput = {
  cartId?: number | null;
  user?: UserWhereUniqueInput | null;
  cartItemsItems?: CartItemsUpdateManyWithoutShoppingCartsInput;
};
