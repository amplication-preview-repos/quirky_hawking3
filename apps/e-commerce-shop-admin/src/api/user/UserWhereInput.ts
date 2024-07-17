import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewsListRelationFilter } from "../reviews/ReviewsListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
import { ShoppingCartListRelationFilter } from "../shoppingCart/ShoppingCartListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  userId?: IntNullableFilter;
  passwordHash?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviewsItems?: ReviewsListRelationFilter;
  wishlists?: WishlistListRelationFilter;
  shoppingCarts?: ShoppingCartListRelationFilter;
};
