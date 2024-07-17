/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ShoppingCartWhereUniqueInput } from "../../shoppingCart/base/ShoppingCartWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ShoppingCartUpdateManyWithoutUsersInput {
  @Field(() => [ShoppingCartWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShoppingCartWhereUniqueInput],
  })
  connect?: Array<ShoppingCartWhereUniqueInput>;

  @Field(() => [ShoppingCartWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShoppingCartWhereUniqueInput],
  })
  disconnect?: Array<ShoppingCartWhereUniqueInput>;

  @Field(() => [ShoppingCartWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ShoppingCartWhereUniqueInput],
  })
  set?: Array<ShoppingCartWhereUniqueInput>;
}

export { ShoppingCartUpdateManyWithoutUsersInput as ShoppingCartUpdateManyWithoutUsersInput };
