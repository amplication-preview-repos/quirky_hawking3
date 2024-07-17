import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  productId?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  stockQuantity?: SortOrder;
  categoryId?: SortOrder;
};
