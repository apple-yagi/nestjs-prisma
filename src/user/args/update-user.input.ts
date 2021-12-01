import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class UpdateUserInput {
  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  name?: string;
}
