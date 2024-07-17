import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderItemId?: SortOrder;
  quantity?: SortOrder;
  priceAtPurchase?: SortOrder;
  orderId?: SortOrder;
  productId?: SortOrder;
};
