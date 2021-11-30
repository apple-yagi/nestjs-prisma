import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateUserInput {
  @Field()
  email: string;

  @Field({ nullable: true })
  name?: string;
}
