import { Module } from '@nestjs/common';
import { MatchesResolver } from './matches.resolver';
import { ResolveModule } from '../resolve/resolve.module';

@Module({
  providers: [MatchesResolver],
  imports: [ResolveModule],
})
export class MatchesModule {}
