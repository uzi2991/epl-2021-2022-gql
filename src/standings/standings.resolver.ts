import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { StandingsEntry } from './models/standings-entry.model';
import { ResolveService } from 'src/resolve/resolve.service';

@Resolver((of) => StandingsEntry)
export class StandingsResolver {
  constructor(private readonly resolveService: ResolveService) {}

  @ResolveField()
  team(@Parent() parent: StandingsEntry) {
    return this.resolveService.getTeam(parent.teamName);
  }
}
