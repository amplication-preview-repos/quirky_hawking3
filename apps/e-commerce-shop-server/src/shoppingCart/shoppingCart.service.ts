import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShoppingCartServiceBase } from "./base/shoppingCart.service.base";

@Injectable()
export class ShoppingCartService extends ShoppingCartServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
