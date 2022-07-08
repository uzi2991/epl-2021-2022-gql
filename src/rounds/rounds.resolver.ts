import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Int,
} from '@nestjs/graphql';
import { Round } from './models/round.model';
import { MatchesOnRoundInput } from './dtos/matches-on-round.input';
import { ResolveService } from '../resolve/resolve.service';

@Resolver((of) => Round)
export class RoundsResolver {
  constructor(private readonly resolveService: ResolveService) {}

  @Query((returns) => [Round])
  rounds() {
    return this.resolveService.getRounds();
  }

  @Query((returns) => Round, { nullable: true })
  round(@Args('roundNumber', { type: () => Int }) roundNumber: number) {
    return this.resolveService.getRound(roundNumber);
  }

  @ResolveField()
  matches(
    @Parent() parent: Round,
    @Args('filter', { nullable: true })
    filter?: MatchesOnRoundInput,
  ) {
    return this.resolveService.getMatchesOnRound(parent.roundNumber, filter);
  }

  @ResolveField()
  standings(@Parent() parent: Round) {
    return this.resolveService.getRoundStandings(parent.roundNumber);
  }
}
