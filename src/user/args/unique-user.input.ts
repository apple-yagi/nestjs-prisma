import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class UniqueUserInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  email?: string;
}
