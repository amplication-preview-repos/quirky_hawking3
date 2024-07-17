import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PaymentsUpdateManyWithoutOrdersInput } from "./PaymentsUpdateManyWithoutOrdersInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  orderId?: number | null;
  orderDate?: Date | null;
  shippingAddress?: string | null;
  status?: string | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
  paymentsItems?: PaymentsUpdateManyWithoutOrdersInput;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
};
