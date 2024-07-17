import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewsWhereInput = {
  id?: StringFilter;
  reviewId?: IntNullableFilter;
  rating?: IntNullableFilter;
  comment?: StringNullableFilter;
  product?: ProductWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
