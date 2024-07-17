import { SortOrder } from "../../util/SortOrder";

export type WishlistItemsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  wishlistItemId?: SortOrder;
  wishlistId?: SortOrder;
  productId?: SortOrder;
};
