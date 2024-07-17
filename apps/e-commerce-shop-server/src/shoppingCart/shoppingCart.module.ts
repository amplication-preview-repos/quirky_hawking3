import { Module } from "@nestjs/common";
import { ShoppingCartModuleBase } from "./base/shoppingCart.module.base";
import { ShoppingCartService } from "./shoppingCart.service";
import { ShoppingCartController } from "./shoppingCart.controller";
import { ShoppingCartResolver } from "./shoppingCart.resolver";

@Module({
  imports: [ShoppingCartModuleBase],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService, ShoppingCartResolver],
  exports: [ShoppingCartService],
})
export class ShoppingCartModule {}
