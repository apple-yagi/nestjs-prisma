import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginationInput } from 'src/shared/args/pagenation.input';
import { PrismaService } from 'src/shared/prisma.service';
import { CreateUserInput } from './args/create-user.input';
import { UniqueUserInput } from './args/unique-user.input';
import { User } from './user.entity';

@Resolver('Users')
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [User])
  users(@Args() paginationInput: PaginationInput) {
    return this.prisma.user.findMany({ ...paginationInput });
  }

  @Query(() => User)
  userById(@Args() uniqueUserInput: UniqueUserInput) {
    return this.prisma.user.findUnique({ where: uniqueUserInput });
  }

  @Mutation(() => User)
  createUser(@Args() createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: createUserInput });
  }
}
