import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewsUpdateManyWithoutProductsInput } from "./ReviewsUpdateManyWithoutProductsInput";
import { WishlistItemsUpdateManyWithoutProductsInput } from "./WishlistItemsUpdateManyWithoutProductsInput";
import { CartItemsUpdateManyWithoutProductsInput } from "./CartItemsUpdateManyWithoutProductsInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  productId?: number | null;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  stockQuantity?: number | null;
  category?: CategoryWhereUniqueInput | null;
  reviewsItems?: ReviewsUpdateManyWithoutProductsInput;
  wishlistItemsItems?: WishlistItemsUpdateManyWithoutProductsInput;
  cartItemsItems?: CartItemsUpdateManyWithoutProductsInput;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
};
