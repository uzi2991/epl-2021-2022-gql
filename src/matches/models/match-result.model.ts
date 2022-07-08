import { Field, ObjectType, Int, registerEnumType } from '@nestjs/graphql';

export enum ResultType {
  HOME_WIN,
  DRAW,
  AWAY_WIN,
}

registerEnumType(ResultType, {
  name: 'ResultType',
});

@ObjectType()
export class MatchResult {
  @Field((type) => Int)
  home: number;

  @Field((type) => Int)
  away: number;

  @Field((type) => ResultType)
  type: ResultType;

  @Field((type) => Int)
  goalDiff: number;
}
