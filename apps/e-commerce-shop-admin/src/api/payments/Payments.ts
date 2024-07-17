import { Order } from "../order/Order";

export type Payments = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  paymentId: number | null;
  paymentDate: Date | null;
  amount: number | null;
  paymentMethod: string | null;
  status: string | null;
  order?: Order | null;
};
