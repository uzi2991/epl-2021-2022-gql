import { Module } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';
import { RoundsRepository } from './rounds.repository';
import { StandingsRepository } from './standings.repository';

@Module({
  providers: [MatchesRepository, RoundsRepository, StandingsRepository],
  exports: [RoundsRepository, MatchesRepository, StandingsRepository],
})
export class ResolveModule {}
