import { ShoppingCart as TShoppingCart } from "../api/shoppingCart/ShoppingCart";

export const SHOPPINGCART_TITLE_FIELD = "id";

export const ShoppingCartTitle = (record: TShoppingCart): string => {
  return record.id?.toString() || String(record.id);
};
