import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Args,
  Int,
} from '@nestjs/graphql';
import { Round } from './models/round.model';
import { RoundsService } from './rounds.service';
import { MatchesOnRoundInput } from './dtos/matches-on-round.input';

@Resolver((of) => Round)
export class RoundsResolver {
  constructor(private readonly roundsService: RoundsService) {}

  @Query((returns) => [Round])
  rounds() {
    return this.roundsService.find();
  }

  @Query((returns) => Round, { nullable: true })
  round(@Args('roundNumber', { type: () => Int }) roundNumber: number) {
    return this.roundsService.findOne(roundNumber);
  }

  @ResolveField()
  matches(
    @Parent() parent: Round,
    @Args('filter', { nullable: true })
    filter?: MatchesOnRoundInput,
  ) {
    return this.roundsService.getMatchesOnRound(parent.roundNumber, filter);
  }

  @ResolveField()
  standings(@Parent() parent: Round) {
    return this.roundsService.getRoundStandings(parent.roundNumber);
  }
}
