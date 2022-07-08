import { Module } from '@nestjs/common';
import { RoundsResolver } from './rounds.resolver';
import { ResolveModule } from '../resolve/resolve.module';

@Module({
  providers: [RoundsResolver],
  imports: [ResolveModule],
})
export class RoundsModule {}
