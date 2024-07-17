import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Reviews } from "../reviews/Reviews";
import { Wishlist } from "../wishlist/Wishlist";
import { ShoppingCart } from "../shoppingCart/ShoppingCart";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  phoneNumber: string | null;
  address: string | null;
  userId: number | null;
  passwordHash: string | null;
  orders?: Array<Order>;
  reviewsItems?: Array<Reviews>;
  wishlists?: Array<Wishlist>;
  shoppingCarts?: Array<ShoppingCart>;
};
