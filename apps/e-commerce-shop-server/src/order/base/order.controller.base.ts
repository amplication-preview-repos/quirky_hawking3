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
import { OrderService } from "../order.service";
import { OrderCreateInput } from "./OrderCreateInput";
import { Order } from "./Order";
import { OrderFindManyArgs } from "./OrderFindManyArgs";
import { OrderWhereUniqueInput } from "./OrderWhereUniqueInput";
import { OrderUpdateInput } from "./OrderUpdateInput";
import { PaymentsFindManyArgs } from "../../payments/base/PaymentsFindManyArgs";
import { Payments } from "../../payments/base/Payments";
import { PaymentsWhereUniqueInput } from "../../payments/base/PaymentsWhereUniqueInput";
import { OrderItemFindManyArgs } from "../../orderItem/base/OrderItemFindManyArgs";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { OrderItemWhereUniqueInput } from "../../orderItem/base/OrderItemWhereUniqueInput";

export class OrderControllerBase {
  constructor(protected readonly service: OrderService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Order })
  async createOrder(@common.Body() data: OrderCreateInput): Promise<Order> {
    return await this.service.createOrder({
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
        orderId: true,
        orderDate: true,
        shippingAddress: true,
        status: true,
        totalAmount: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyArgs)
  async orders(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyArgs, request.query);
    return this.service.orders({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        orderId: true,
        orderDate: true,
        shippingAddress: true,
        status: true,
        totalAmount: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async order(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    const result = await this.service.order({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        orderId: true,
        orderDate: true,
        shippingAddress: true,
        status: true,
        totalAmount: true,

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
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOrder(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() data: OrderUpdateInput
  ): Promise<Order | null> {
    try {
      return await this.service.updateOrder({
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
          orderId: true,
          orderDate: true,
          shippingAddress: true,
          status: true,
          totalAmount: true,

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
  @swagger.ApiOkResponse({ type: Order })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOrder(
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Order | null> {
    try {
      return await this.service.deleteOrder({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          orderId: true,
          orderDate: true,
          shippingAddress: true,
          status: true,
          totalAmount: true,

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

  @common.Get("/:id/paymentsItems")
  @ApiNestedQuery(PaymentsFindManyArgs)
  async findPaymentsItems(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<Payments[]> {
    const query = plainToClass(PaymentsFindManyArgs, request.query);
    const results = await this.service.findPaymentsItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        paymentId: true,
        paymentDate: true,
        amount: true,
        paymentMethod: true,
        status: true,

        order: {
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

  @common.Post("/:id/paymentsItems")
  async connectPaymentsItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentsItems: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/paymentsItems")
  async updatePaymentsItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentsItems: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/paymentsItems")
  async disconnectPaymentsItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: PaymentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      paymentsItems: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/orderItems")
  @ApiNestedQuery(OrderItemFindManyArgs)
  async findOrderItems(
    @common.Req() request: Request,
    @common.Param() params: OrderWhereUniqueInput
  ): Promise<OrderItem[]> {
    const query = plainToClass(OrderItemFindManyArgs, request.query);
    const results = await this.service.findOrderItems(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        orderItemId: true,
        quantity: true,
        priceAtPurchase: true,

        order: {
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

  @common.Post("/:id/orderItems")
  async connectOrderItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItems: {
        connect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orderItems")
  async updateOrderItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItems: {
        set: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orderItems")
  async disconnectOrderItems(
    @common.Param() params: OrderWhereUniqueInput,
    @common.Body() body: OrderItemWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orderItems: {
        disconnect: body,
      },
    };
    await this.service.updateOrder({
      where: params,
      data,
      select: { id: true },
    });
  }
}
