import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentsUpdateInput = {
  paymentId?: number | null;
  paymentDate?: Date | null;
  amount?: number | null;
  paymentMethod?: string | null;
  status?: string | null;
  order?: OrderWhereUniqueInput | null;
};
