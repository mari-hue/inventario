import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { Region } from './entity/region.entity';
import { Country } from '../country/entity/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Region, Country])],
  controllers: [RegionController],
  providers: [RegionService],
  exports: [RegionService],
})
export class RegionModule {}