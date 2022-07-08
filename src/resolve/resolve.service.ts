import { Injectable } from '@nestjs/common';
import { MatchesRepository } from './matches.repository';
import { TeamsRepository } from './teams.repository';
import { StandingsRepository } from './standings.repository';
import { RoundsRepository } from './rounds.repository';
import { MatchesInput } from '../matches/dtos/matches.input';
import { MatchesOnRoundInput } from '../rounds/dtos/matches-on-round.input';

@Injectable()
export class ResolveService {
  constructor(
    private readonly matchesRepo: MatchesRepository,
    private readonly teamsRepo: TeamsRepository,
    private readonly standingsRepo: StandingsRepository,
    private readonly roundsRepo: RoundsRepository,
  ) {}

  getTeam(teamName: string) {
    return this.teamsRepo.findOne(teamName);
  }

  getTeams() {
    return this.teamsRepo.find();
  }

  getMatchesOfTeams(teamName: string) {
    const team = this.getTeam(teamName);

    if (!team) {
      return [];
    }

    return team.matchNumbers.map((matchNumber) =>
      this.matchesRepo.findOne(matchNumber),
    );
  }

  getStandingsEntriesOfTeams(teamName: string) {
    const team = this.getTeam(teamName);

    if (!team) {
      return [];
    }

    return Object.values(team.standingIds).map((id) =>
      this.standingsRepo.findOne(id),
    );
  }

  getMatch(matchNumber: number) {
    return this.matchesRepo.findOne(matchNumber);
  }

  getMatches(filter?: MatchesInput) {
    return this.matchesRepo.find(filter);
  }

  getRound(roundNumber: number) {
    return this.roundsRepo.findOne(roundNumber);
  }

  getRounds() {
    return this.roundsRepo.find();
  }

  getMatchesOnRound(roundNumber: number, filter?: MatchesOnRoundInput) {
    const round = this.getRound(roundNumber);
    if (!round) {
      return [];
    }

    const matches = round.matchNumbers.map((matchNumber) =>
      this.getMatch(matchNumber),
    );

    return this.matchesRepo.filterMatches(matches, { ...filter, roundNumber });
  }

  getRoundStandings(roundNumber: number) {
    return this.standingsRepo.getStandingsOnRound(roundNumber);
  }
}
