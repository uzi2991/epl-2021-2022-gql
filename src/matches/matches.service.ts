import { Injectable } from '@nestjs/common';
import { MatchesInput } from './dtos/matches.input';
import { MatchesRepository } from '../resolve/matches.repository';
import { RoundsRepository } from '../resolve/rounds.repository';

@Injectable()
export class MatchesService {
  constructor(
    private readonly matchesRepo: MatchesRepository,
    private readonly roundsRepo: RoundsRepository,
  ) {}

  findOne(matchNumber: number) {
    return this.matchesRepo.findOne(matchNumber);
  }

  find(filter?: MatchesInput) {
    return this.matchesRepo.find(filter);
  }

  getRound(roundNumber: number) {
    return this.roundsRepo.findOne(roundNumber);
  }
}
