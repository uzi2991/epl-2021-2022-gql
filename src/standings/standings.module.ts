import { Module } from '@nestjs/common';
import { ResolveModule } from '../resolve/resolve.module';
import { StandingsResolver } from './standings.resolver';

@Module({
  imports: [ResolveModule],
  providers: [StandingsResolver],
})
export class StandingsModule {}
