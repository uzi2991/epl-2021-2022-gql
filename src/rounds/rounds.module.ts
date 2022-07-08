import { Module } from '@nestjs/common';
import { RoundsService } from './rounds.service';
import { RoundsResolver } from './rounds.resolver';
import { ResolveModule } from '../resolve/resolve.module';

@Module({
  providers: [RoundsService, RoundsResolver],
  imports: [ResolveModule],
})
export class RoundsModule {}
