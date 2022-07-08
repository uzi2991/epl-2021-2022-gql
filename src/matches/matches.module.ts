import { Module } from '@nestjs/common';
import { MatchesResolver } from './matches.resolver';
import { MatchesService } from './matches.service';
import { ResolveModule } from '../resolve/resolve.module';

@Module({
  providers: [MatchesResolver, MatchesService],
  imports: [ResolveModule],
})
export class MatchesModule {}
