import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Round } from 'src/rounds/models/round.model';

@Injectable()
export class RoundsRepository {
  rounds: Record<number, Round>;

  constructor() {
    const fileContent = fs.readFileSync('data/rounds.json', 'utf-8');
    this.rounds = JSON.parse(fileContent);
    console.log('Rounds Repo init successfully');
  }

  find() {
    const filteredRounds = Object.values(this.rounds);

    return filteredRounds;
  }

  findOne(roundNumber: number) {
    return this.rounds[roundNumber];
  }
}
