import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewsCreateNestedManyWithoutProductsInput } from "./ReviewsCreateNestedManyWithoutProductsInput";
import { WishlistItemsCreateNestedManyWithoutProductsInput } from "./WishlistItemsCreateNestedManyWithoutProductsInput";
import { CartItemsCreateNestedManyWithoutProductsInput } from "./CartItemsCreateNestedManyWithoutProductsInput";
import { OrderItemCreateNestedManyWithoutProductsInput } from "./OrderItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  productId?: number | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  stockQuantity?: number | null;
  category?: CategoryWhereUniqueInput | null;
  reviewsItems?: ReviewsCreateNestedManyWithoutProductsInput;
  wishlistItemsItems?: WishlistItemsCreateNestedManyWithoutProductsInput;
  cartItemsItems?: CartItemsCreateNestedManyWithoutProductsInput;
  orderItems?: OrderItemCreateNestedManyWithoutProductsInput;
};
