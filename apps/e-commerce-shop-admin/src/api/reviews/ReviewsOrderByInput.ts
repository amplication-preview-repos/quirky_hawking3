import { SortOrder } from "../../util/SortOrder";

export type ReviewsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  reviewId?: SortOrder;
  rating?: SortOrder;
  comment?: SortOrder;
  productId?: SortOrder;
  userId?: SortOrder;
};
