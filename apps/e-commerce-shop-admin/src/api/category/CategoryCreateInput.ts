import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryId?: number | null;
  categoryName?: string | null;
  parentCategoryId?: number | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
};
