import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Match } from './models/match.model';
import { MatchesService } from './matches.service';
import { MatchesInput } from './dtos/matches.input';

@Resolver((of) => Match)
export class MatchesResolver {
  constructor(private readonly matchesService: MatchesService) {}

  @Query((returns) => [Match])
  matches(
    @Args('filter', { nullable: true })
    filter?: MatchesInput,
  ) {
    return this.matchesService.find(filter);
  }

  @Query((returns) => Match, { nullable: true })
  match(@Args('matchNumber', { type: () => Int }) matchNumber: number) {
    return this.matchesService.findOne(matchNumber);
  }

  @ResolveField()
  round(@Parent() parent: Match) {
    return this.matchesService.getRound(parent.roundNumber);
  }
}
