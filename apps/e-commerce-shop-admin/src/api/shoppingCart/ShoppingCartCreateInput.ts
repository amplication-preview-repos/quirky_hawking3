import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CartItemsCreateNestedManyWithoutShoppingCartsInput } from "./CartItemsCreateNestedManyWithoutShoppingCartsInput";

export type ShoppingCartCreateInput = {
  cartId?: number | null;
  user?: UserWhereUniqueInput | null;
  cartItemsItems?: CartItemsCreateNestedManyWithoutShoppingCartsInput;
};
