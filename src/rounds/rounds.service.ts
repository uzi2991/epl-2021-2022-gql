import { Injectable } from '@nestjs/common';
import { RoundsRepository } from 'src/resolve/rounds.repository';
import { MatchesRepository } from 'src/resolve/matches.repository';
import { MatchesOnRoundInput } from './dtos/matches-on-round.input';
import { StandingsRepository } from '../resolve/standings.repository';

@Injectable()
export class RoundsService {
  constructor(
    private readonly roundsRepo: RoundsRepository,
    private readonly matchesRepo: MatchesRepository,
    private readonly standingsRepo: StandingsRepository,
  ) {}

  find() {
    return this.roundsRepo.find();
  }

  findOne(roundNumber: number) {
    return this.roundsRepo.findOne(roundNumber);
  }

  getMatchesOnRound(roundNumber: number, filter?: MatchesOnRoundInput) {
    const round = this.findOne(roundNumber);
    if (!round) {
      return [];
    }

    const matches = round.matchNumbers.map((matchNumber) =>
      this.matchesRepo.findOne(matchNumber),
    );

    return this.matchesRepo.filterMatches(matches, { ...filter, roundNumber });
  }

  getRoundStandings(roundNumber: number) {
    return this.standingsRepo.findOne(roundNumber);
  }
}
