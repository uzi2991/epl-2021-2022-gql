import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class StandingsEntry {
  id: string;

  @Field((type) => Int)
  position: number;

  @Field()
  team: string;

  @Field((type) => Int)
  gamesWon: number;

  @Field((type) => Int)
  gamesDrawn: number;

  @Field((type) => Int)
  gamesLost: number;

  @Field((type) => Int)
  goalsScored: number;

  @Field((type) => Int)
  goalsConceded: number;

  @Field((type) => Int)
  goalDiff: number;

  @Field((type) => Int)
  points: number;
}
