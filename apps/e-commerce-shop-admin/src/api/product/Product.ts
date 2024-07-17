import { Category } from "../category/Category";
import { Reviews } from "../reviews/Reviews";
import { WishlistItems } from "../wishlistItems/WishlistItems";
import { CartItems } from "../cartItems/CartItems";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  productId: number | null;
  name: string | null;
  description: string | null;
  price: number | null;
  stockQuantity: number | null;
  category?: Category | null;
  reviewsItems?: Array<Reviews>;
  wishlistItemsItems?: Array<WishlistItems>;
  cartItemsItems?: Array<CartItems>;
  orderItems?: Array<OrderItem>;
};
