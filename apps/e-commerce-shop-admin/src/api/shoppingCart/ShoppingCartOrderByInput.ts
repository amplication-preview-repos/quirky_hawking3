import { SortOrder } from "../../util/SortOrder";

export type ShoppingCartOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  cartId?: SortOrder;
  userId?: SortOrder;
};
