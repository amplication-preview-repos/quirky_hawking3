import { User } from "../user/User";
import { CartItems } from "../cartItems/CartItems";

export type ShoppingCart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  cartId: number | null;
  user?: User | null;
  cartItemsItems?: Array<CartItems>;
};
