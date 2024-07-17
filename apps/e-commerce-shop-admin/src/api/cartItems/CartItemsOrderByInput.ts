import { SortOrder } from "../../util/SortOrder";

export type CartItemsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  cartItemId?: SortOrder;
  quantity?: SortOrder;
  shoppingCartId?: SortOrder;
  productId?: SortOrder;
};
