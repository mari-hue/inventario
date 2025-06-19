import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './entity/region.entity';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Country } from '../country/entity/country.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}

  create(dto: CreateRegionDto): Promise<Region> {
    return this.regionRepository.save({
      name: dto.name,
      country: { id_country: dto.id_country } as Country,
    });
  }

  findAll(): Promise<Region[]> {
    return this.regionRepository.find({ relations: ['country'] });
  }

  async findOne(id: number): Promise<Region> {
    const region = await this.regionRepository.findOne({ where: { id_region: id }, relations: ['country'] });
    if (!region) throw new NotFoundException(`Region with ID ${id} not found`);
    return region;
  }

  async update(id: number, dto: UpdateRegionDto): Promise<Region> {
    await this.findOne(id);
    await this.regionRepository.update(id, {
      name: dto.name,
      country: dto.id_country ? { id_country: dto.id_country } as Country : undefined,
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.regionRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Region with ID ${id} not found`);
  }
}
