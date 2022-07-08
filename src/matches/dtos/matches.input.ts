import { InputType, Field, Int } from '@nestjs/graphql';
import { ResultType } from '../models/match-result.model';

@InputType()
export class MatchesInput {
  @Field((type) => Int, { nullable: true })
  roundNumber: number;
  
  @Field({ nullable: true })
  homeTeam?: string;

  @Field({ nullable: true })
  awayTeam?: string;

  @Field({ nullable: true })
  team?: string;

  @Field((type) => ResultType, { nullable: true })
  resultType?: ResultType;

  @Field((type) => Int, { nullable: true })
  goalDiff: number;
}
