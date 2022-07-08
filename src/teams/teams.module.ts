import { Module } from '@nestjs/common';
import { ResolveModule } from '../resolve/resolve.module';
import { TeamsResolver } from './teams.resolver';

@Module({ imports: [ResolveModule], providers: [TeamsResolver] })
export class TeamsModule {}
