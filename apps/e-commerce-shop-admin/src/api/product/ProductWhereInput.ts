import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewsListRelationFilter } from "../reviews/ReviewsListRelationFilter";
import { WishlistItemsListRelationFilter } from "../wishlistItems/WishlistItemsListRelationFilter";
import { CartItemsListRelationFilter } from "../cartItems/CartItemsListRelationFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  productId?: IntNullableFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  stockQuantity?: IntNullableFilter;
  category?: CategoryWhereUniqueInput;
  reviewsItems?: ReviewsListRelationFilter;
  wishlistItemsItems?: WishlistItemsListRelationFilter;
  cartItemsItems?: CartItemsListRelationFilter;
  orderItems?: OrderItemListRelationFilter;
};
