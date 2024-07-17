import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentsCreateNestedManyWithoutOrdersInput } from "./PaymentsCreateNestedManyWithoutOrdersInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  orderId?: number | null;
  orderDate?: Date | null;
  shippingAddress?: string | null;
  status?: string | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
  paymentsItems?: PaymentsCreateNestedManyWithoutOrdersInput;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
};
