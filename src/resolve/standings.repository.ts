import { Injectable } from '@nestjs/common';
import { StandingsEntry } from '../standings/models/standings-entry.model';
import * as fs from 'fs';

@Injectable()
export class StandingsRepository {
  standings: Record<number, StandingsEntry[]>;

  constructor() {
    const fileContent = fs.readFileSync('data/standings.json', 'utf-8');
    this.standings = JSON.parse(fileContent);

    console.log('Standings Repo init successfully');
  }

  getStandingsOnRound(roundNumber: number) {
    return this.standings[roundNumber];
  }

  findOne(id: string) {
    const [roundNumber, pos] = id.split('/');
    return this.standings[parseInt(roundNumber)].find(
      (entry) => entry.position === parseInt(pos),
    );
  }
}
