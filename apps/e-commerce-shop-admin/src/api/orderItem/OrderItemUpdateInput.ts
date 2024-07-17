import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemUpdateInput = {
  orderItemId?: number | null;
  quantity?: number | null;
  priceAtPurchase?: number | null;
  order?: OrderWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
};
