import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field({ name: 'registerdAt' })
  createdAt?: Date;

  updatedAt?: Date;

  @Field()
  email: string;
}
