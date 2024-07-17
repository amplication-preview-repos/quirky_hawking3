/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PaymentsWhereUniqueInput } from "../../payments/base/PaymentsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PaymentsUpdateManyWithoutOrdersInput {
  @Field(() => [PaymentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentsWhereUniqueInput],
  })
  connect?: Array<PaymentsWhereUniqueInput>;

  @Field(() => [PaymentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentsWhereUniqueInput],
  })
  disconnect?: Array<PaymentsWhereUniqueInput>;

  @Field(() => [PaymentsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PaymentsWhereUniqueInput],
  })
  set?: Array<PaymentsWhereUniqueInput>;
}

export { PaymentsUpdateManyWithoutOrdersInput as PaymentsUpdateManyWithoutOrdersInput };
