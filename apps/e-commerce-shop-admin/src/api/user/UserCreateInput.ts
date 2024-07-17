import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ReviewsCreateNestedManyWithoutUsersInput } from "./ReviewsCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";
import { ShoppingCartCreateNestedManyWithoutUsersInput } from "./ShoppingCartCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  phoneNumber?: string | null;
  address?: string | null;
  userId?: number | null;
  passwordHash?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  reviewsItems?: ReviewsCreateNestedManyWithoutUsersInput;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
  shoppingCarts?: ShoppingCartCreateNestedManyWithoutUsersInput;
};
