import { Wishlist } from "../wishlist/Wishlist";
import { Product } from "../product/Product";

export type WishlistItems = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  wishlistItemId: number | null;
  wishlist?: Wishlist | null;
  product?: Product | null;
};
