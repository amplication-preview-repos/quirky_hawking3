/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ShoppingCartService } from "../shoppingCart.service";
import { ShoppingCartCreateInput } from "./ShoppingCartCreateInput";
import { ShoppingCart } from "./ShoppingCart";
import { ShoppingCartFindManyArgs } from "./ShoppingCartFindManyArgs";
import { ShoppingCartWhereUniqueInput } from "./ShoppingCartWhereUniqueInput";
import { ShoppingCartUpdateInput } from "./ShoppingCartUpdateInput";
import { CartItemsFindManyArgs } from "../../cartItems/base/CartItemsFindManyArgs";
import { CartItems } from "../../cartItems/base/CartItems";
import { CartItemsWhereUniqueInput } from "../../cartItems/base/CartItemsWhereUniqueInput";

export class ShoppingCartControllerBase {
  constructor(protected readonly service: ShoppingCartService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ShoppingCart })
  async createShoppingCart(
    @common.Body() data: ShoppingCartCreateInput
  ): Promise<ShoppingCart> {
    return await this.service.createShoppingCart({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        cartId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ShoppingCart] })
  @ApiNestedQuery(ShoppingCartFindManyArgs)
  async shoppingCarts(@common.Req() request: Request): Promise<ShoppingCart[]> {
    const args = plainToClass(ShoppingCartFindManyArgs, request.query);
    return this.service.shoppingCarts({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        cartId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ShoppingCart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async shoppingCart(
    @common.Param() params: ShoppingCartWhereUniqueInput
  ): Promise<ShoppingCart | null> {
    const result = await this.service.shoppingCart({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        cartId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ShoppingCart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateShoppingCart(
    @common.Param() params: ShoppingCartWhereUniqueInput,
    @common.Body() data: ShoppingCartUpdateInput
  ): Promise<ShoppingCart | null> {
    try {
      return await this.service.updateShoppingCart({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          cartId: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ShoppingCart })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteShoppingCart(
    @common.Param() params: ShoppingCartWhereUniqueInput
  ): Promise<ShoppingCart | null> {
    try {
      return await this.service.deleteShoppingCart({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          cartId: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/cartItemsItems")
  @ApiNestedQuery(CartItemsFindManyArgs)
  async findCartItemsItems(
    @common.Req() request: Request,
    @common.Param() params: ShoppingCartWhereUniqueInput
  ): Promise<CartItems[]> {
    const query = plainToClass(CartItemsFindManyArgs, request.query);
    const results = await this.service.findCartItemsItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        cartItemId: true,
        quantity: true,

        shoppingCart: {
          select: {
            id: true,
          },
        },

        product: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/cartItemsItems")
  async connectCartItemsItems(
    @common.Param() params: ShoppingCartWhereUniqueInput,
    @common.Body() body: CartItemsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cartItemsItems: {
        connect: body,
      },
    };
    await this.service.updateShoppingCart({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/cartItemsItems")
  async updateCartItemsItems(
    @common.Param() params: ShoppingCartWhereUniqueInput,
    @common.Body() body: CartItemsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cartItemsItems: {
        set: body,
      },
    };
    await this.service.updateShoppingCart({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/cartItemsItems")
  async disconnectCartItemsItems(
    @common.Param() params: ShoppingCartWhereUniqueInput,
    @common.Body() body: CartItemsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      cartItemsItems: {
        disconnect: body,
      },
    };
    await this.service.updateShoppingCart({
      where: params,
      data,
      select: { id: true },
    });
  }
}
