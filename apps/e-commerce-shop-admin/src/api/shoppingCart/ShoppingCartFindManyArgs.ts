import { ShoppingCartWhereInput } from "./ShoppingCartWhereInput";
import { ShoppingCartOrderByInput } from "./ShoppingCartOrderByInput";

export type ShoppingCartFindManyArgs = {
  where?: ShoppingCartWhereInput;
  orderBy?: Array<ShoppingCartOrderByInput>;
  skip?: number;
  take?: number;
};
