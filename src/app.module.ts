import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { MatchesModule } from './matches/matches.module';
import { RoundsModule } from './rounds/rounds.module';
import { ResolveModule } from './resolve/resolve.module';
import { StandingsModule } from './standings/standings.module';

@Module({
  imports: [
    MatchesModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    RoundsModule,
    ResolveModule,
    StandingsModule,
  ],
})
export class AppModule {}
