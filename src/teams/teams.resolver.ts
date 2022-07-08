import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Team } from './models/team.model';
import { ResolveService } from '../resolve/resolve.service';
import { MatchesInput } from '../matches/dtos/matches.input';

@Resolver((of) => Team)
export class TeamsResolver {
  constructor(private readonly resolveService: ResolveService) {}

  @Query((returns) => Team, { nullable: true })
  team(@Args('teamName') teamName: string) {
    return this.resolveService.getTeam(teamName);
  }

  @Query((returns) => [Team])
  teams() {
    return this.resolveService.getTeams();
  }

  @ResolveField()
  matches(
    @Parent() parent: Team,
    @Args('filter', { nullable: true }) filter?: MatchesInput,
  ) {
    return this.resolveService.getMatchesOfTeams(parent.name, filter);
  }

  @ResolveField()
  standingsEntries(@Parent() parent: Team) {
    return this.resolveService.getStandingsEntriesOfTeams(parent.name);
  }
}
