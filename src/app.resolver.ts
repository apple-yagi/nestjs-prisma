import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PrismaService } from './prisma.service';

@Resolver(() => User)
export class AppResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [User])
  async users() {
    return this.prisma.user.findMany();
  }
}
