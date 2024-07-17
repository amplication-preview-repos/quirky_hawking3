import { User } from "../user/User";
import { Payments } from "../payments/Payments";
import { OrderItem } from "../orderItem/OrderItem";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderId: number | null;
  orderDate: Date | null;
  shippingAddress: string | null;
  status: string | null;
  totalAmount: number | null;
  user?: User | null;
  paymentsItems?: Array<Payments>;
  orderItems?: Array<OrderItem>;
};
