import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Team } from '../../teams/models/team.model';

@ObjectType()
export class StandingsEntry {
  id: string;

  teamName: string;

  roundNumber: number;

  @Field((type) => Int)
  position: number;

  @Field((type) => Team)
  team: Team;

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
