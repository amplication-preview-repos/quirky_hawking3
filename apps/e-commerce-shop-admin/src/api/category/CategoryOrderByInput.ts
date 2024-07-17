import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  categoryId?: SortOrder;
  categoryName?: SortOrder;
  parentCategoryId?: SortOrder;
};
