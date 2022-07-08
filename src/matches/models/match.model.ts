import { Field, ObjectType, Int } from '@nestjs/graphql';
import { MatchResult } from './match-result.model';
import { Round } from '../../rounds/models/round.model';
import { Team } from '../../teams/models/team.model';

@ObjectType()
export class Match {
  @Field((type) => Int)
  matchNumber: number;

  roundNumber: number;

  @Field((type) => Round)
  round: Round;

  @Field()
  date: string;

  @Field()
  location: string;

  @Field()
  homeTeam: Team;

  homeTeamName: string;

  @Field()
  awayTeam: Team;

  awayTeamName: string;

  @Field((type) => MatchResult)
  result: MatchResult;
}
