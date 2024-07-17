import { SortOrder } from "../../util/SortOrder";

export type PaymentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  paymentId?: SortOrder;
  paymentDate?: SortOrder;
  amount?: SortOrder;
  paymentMethod?: SortOrder;
  status?: SortOrder;
  orderId?: SortOrder;
};
