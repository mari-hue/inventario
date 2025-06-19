import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './Entity/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Region } from '../region/entity/region.entity';
import { Country } from '../country/entity/country.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  create(dto: CreateCityDto): Promise<City> {
    return this.cityRepository.save({
      name: dto.name,
      region: { id_region: dto.id_region } as Region,
      country: { id_country: dto.id_country } as Country,
    });
  }

  findAll(): Promise<City[]> {
    return this.cityRepository.find({ relations: ['region', 'country'] });
  }

  async findOne(id: number): Promise<City> {
    const city = await this.cityRepository.findOne({ where: { id_city: id }, relations: ['region', 'country'] });
    if (!city) throw new NotFoundException(`City with ID ${id} not found`);
    return city;
  }

  async update(id: number, dto: UpdateCityDto): Promise<City> {
    await this.findOne(id);
    await this.cityRepository.update(id, {
      name: dto.name,
      region: dto.id_region ? { id_region: dto.id_region } as Region : undefined,
      country: dto.id_country ? { id_country: dto.id_country } as Country : undefined,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cityRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`City with ID ${id} not found`);
  }
}
