import { Injectable } from '@nestjs/common';
import { Match } from 'src/matches/models/match.model';
import * as fs from 'fs';
import { MatchesInput } from 'src/matches/dtos/matches.input';
import { FilterFunctions } from 'src/common/type';
import { MatchResult, ResultType } from 'src/matches/models/match-result.model';

const matchesFilterFuncs: FilterFunctions<MatchesInput, Match> = {
  team: (match, input) => match.awayTeam === input || match.homeTeam === input,
  homeTeam: (match, input) => match.homeTeam === input,
  awayTeam: (match, input) => match.awayTeam === input,
  resultType: (match, input) => match.result.type === input,
  goalDiff: (match, input) => match.result.goalDiff === input,
  roundNumber: (match, input) => match.roundNumber === input,
};

const getResultType = (result: MatchResult) => {
  if (result.home > result.away) {
    return ResultType.HOME_WIN;
  }

  if (result.home === result.away) {
    return ResultType.DRAW;
  }

  return ResultType.AWAY_WIN;
};

@Injectable()
export class MatchesRepository {
  private matches: Record<number, Match>;

  constructor() {
    const content = fs.readFileSync('data/matches.json', 'utf-8');
    this.matches = JSON.parse(content);

    Object.values(this.matches).forEach((match) => {
      match.result.type = getResultType(match.result);
      match.result.goalDiff = match.result.home - match.result.away;
    });

    console.log('Matches Repo init successfully');
  }

  findOne(matchNumber: number) {
    return this.matches[matchNumber];
  }

  filterMatches(matches: Match[], filter?: MatchesInput) {
    let filteredMatches = matches;

    Object.entries(filter || {}).forEach(([key, value]) => {
      if (key !== undefined && value !== null) {
        filteredMatches = filteredMatches.filter((match) =>
          matchesFilterFuncs[key](match, value),
        );
      }
    });

    return filteredMatches;
  }

  find(filter?: MatchesInput) {
    return this.filterMatches(Object.values(this.matches), filter);
  }
}
