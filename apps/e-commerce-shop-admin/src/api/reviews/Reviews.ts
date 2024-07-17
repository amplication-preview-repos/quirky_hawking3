import { Product } from "../product/Product";
import { User } from "../user/User";

export type Reviews = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  reviewId: number | null;
  rating: number | null;
  comment: string | null;
  product?: Product | null;
  user?: User | null;
};
