import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentsListRelationFilter } from "../payments/PaymentsListRelationFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderId?: IntNullableFilter;
  orderDate?: DateTimeNullableFilter;
  shippingAddress?: StringNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  paymentsItems?: PaymentsListRelationFilter;
  orderItems?: OrderItemListRelationFilter;
};
