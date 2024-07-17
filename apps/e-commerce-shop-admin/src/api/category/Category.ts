import { Product } from "../product/Product";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number | null;
  categoryName: string | null;
  parentCategoryId: number | null;
  products?: Array<Product>;
};
