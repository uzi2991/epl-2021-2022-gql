import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Match } from '../../matches/models/match.model';
import { StandingsEntry } from '../../standings/models/standings-entry.model';

@ObjectType()
export class Round {
  @Field((type) => Int)
  roundNumber: number;

  @Field((type) => [Match])
  matches: Match[];

  @Field((type) => [StandingsEntry])
  standings: StandingsEntry[];
  
  matchNumbers: number[];
}
