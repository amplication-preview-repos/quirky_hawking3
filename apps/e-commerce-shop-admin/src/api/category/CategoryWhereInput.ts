import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type CategoryWhereInput = {
  id?: StringFilter;
  categoryId?: IntNullableFilter;
  categoryName?: StringNullableFilter;
  parentCategoryId?: IntNullableFilter;
  products?: ProductListRelationFilter;
};
