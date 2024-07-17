import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderItemWhereInput = {
  id?: StringFilter;
  orderItemId?: IntNullableFilter;
  quantity?: IntNullableFilter;
  priceAtPurchase?: FloatNullableFilter;
  order?: OrderWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
