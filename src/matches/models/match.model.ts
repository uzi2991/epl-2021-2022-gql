import { Field, ObjectType, Int } from '@nestjs/graphql';
import { MatchResult } from './match-result.model';
import { Round } from '../../rounds/models/round.model';

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
  homeTeam: string;

  @Field()
  awayTeam: string;

  @Field((type) => MatchResult)
  result: MatchResult;
}
