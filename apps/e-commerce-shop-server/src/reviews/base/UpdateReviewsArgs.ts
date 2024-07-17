/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReviewsWhereUniqueInput } from "./ReviewsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ReviewsUpdateInput } from "./ReviewsUpdateInput";

@ArgsType()
class UpdateReviewsArgs {
  @ApiProperty({
    required: true,
    type: () => ReviewsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ReviewsWhereUniqueInput)
  @Field(() => ReviewsWhereUniqueInput, { nullable: false })
  where!: ReviewsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ReviewsUpdateInput,
  })
  @ValidateNested()
  @Type(() => ReviewsUpdateInput)
  @Field(() => ReviewsUpdateInput, { nullable: false })
  data!: ReviewsUpdateInput;
}

export { UpdateReviewsArgs as UpdateReviewsArgs };
