import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Match } from './models/match.model';
import { MatchesInput } from './dtos/matches.input';
import { ResolveService } from '../resolve/resolve.service';

@Resolver((of) => Match)
export class MatchesResolver {
  constructor(private readonly resolveService: ResolveService) {}

  @Query((returns) => [Match])
  matches(
    @Args('filter', { nullable: true })
    filter?: MatchesInput,
  ) {
    return this.resolveService.getMatches(filter);
  }

  @Query((returns) => Match, { nullable: true })
  match(@Args('matchNumber', { type: () => Int }) matchNumber: number) {
    return this.resolveService.getMatch(matchNumber);
  }

  @ResolveField()
  round(@Parent() parent: Match) {
    return this.resolveService.getRound(parent.roundNumber);
  }

  @ResolveField()
  homeTeam(@Parent() parent: Match) {
    return this.resolveService.getTeam(parent.homeTeamName);
  }

  @ResolveField()
  awayTeam(@Parent() parent: Match) {
    return this.resolveService.getTeam(parent.awayTeamName);
  }
}
