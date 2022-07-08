import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Team } from '../teams/models/team.model';

@Injectable()
export class TeamsRepository {
  private teams: Record<string, Team>;

  constructor() {
    const fileContent = fs.readFileSync('data/teams.json', 'utf-8');

    this.teams = JSON.parse(fileContent);
    console.log('Teams Repo init successfully');
  }

  findOne(teamName: string) {
    return this.teams[teamName];
  }

  find() {
    return Object.values(this.teams);
  }
}
