import { ShoppingCart } from "../shoppingCart/ShoppingCart";
import { Product } from "../product/Product";

export type CartItems = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cartItemId: number | null;
  quantity: number | null;
  shoppingCart?: ShoppingCart | null;
  product?: Product | null;
};
