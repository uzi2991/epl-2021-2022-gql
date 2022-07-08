import { Field, ObjectType } from '@nestjs/graphql';
import { Match } from 'src/matches/models/match.model';
import { StandingsEntry } from '../../standings/models/standings-entry.model';

@ObjectType()
export class Team {
  @Field()
  name: string;

  @Field((type) => [Match])
  matches: Match[];

  @Field((type) => [StandingsEntry])
  standingsEntries: StandingsEntry[];

  matchNumbers: number[];

  standingIds: Record<number, string>;
}
