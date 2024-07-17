import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryId?: number | null;
  categoryName?: string | null;
  parentCategoryId?: number | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
};
