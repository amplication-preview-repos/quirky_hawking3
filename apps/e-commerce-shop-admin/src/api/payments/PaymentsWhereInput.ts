import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentsWhereInput = {
  id?: StringFilter;
  paymentId?: IntNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  amount?: FloatNullableFilter;
  paymentMethod?: StringNullableFilter;
  status?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
