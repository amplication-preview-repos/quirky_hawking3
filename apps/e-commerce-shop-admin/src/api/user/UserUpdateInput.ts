import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ReviewsUpdateManyWithoutUsersInput } from "./ReviewsUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";
import { ShoppingCartUpdateManyWithoutUsersInput } from "./ShoppingCartUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  phoneNumber?: string | null;
  address?: string | null;
  userId?: number | null;
  passwordHash?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  reviewsItems?: ReviewsUpdateManyWithoutUsersInput;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
  shoppingCarts?: ShoppingCartUpdateManyWithoutUsersInput;
};
