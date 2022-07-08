import { Module } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';
import { RoundsRepository } from './rounds.repository';
import { StandingsRepository } from './standings.repository';
import { TeamsRepository } from './teams.repository';
import { ResolveService } from './resolve.service';

@Module({
  providers: [
    MatchesRepository,
    RoundsRepository,
    StandingsRepository,
    TeamsRepository,
    ResolveService,
  ],
  exports: [
    RoundsRepository,
    MatchesRepository,
    StandingsRepository,
    TeamsRepository,
    ResolveService,
  ],
})
export class ResolveModule {}
