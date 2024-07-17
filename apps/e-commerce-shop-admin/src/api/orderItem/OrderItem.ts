import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderItemId: number | null;
  quantity: number | null;
  priceAtPurchase: number | null;
  order?: Order | null;
  product?: Product | null;
};
