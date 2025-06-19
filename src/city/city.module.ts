import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { City } from '../city/Entity/city.entity';
import { Region } from '../region/entity/region.entity';
import { Country } from '../country/entity/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City, Region, Country])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
})
export class CityModule {}