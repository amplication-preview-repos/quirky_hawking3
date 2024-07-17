import { User } from "../user/User";
import { WishlistItems } from "../wishlistItems/WishlistItems";

export type Wishlist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  wishlistId: number | null;
  user?: User | null;
  wishlistItemsItems?: Array<WishlistItems>;
};
