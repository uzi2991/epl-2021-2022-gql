import { InputType, OmitType } from '@nestjs/graphql';
import { MatchesInput } from '../../matches/dtos/matches.input';

@InputType()
export class MatchesOnRoundInput extends OmitType(MatchesInput, [
  'roundNumber',
] as const) {}
