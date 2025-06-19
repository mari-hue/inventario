import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from './entity/country.entity';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly countryRepository: Repository<Country>,
  ) {}

  create(dto: CreateCountryDto): Promise<Country> {
    return this.countryRepository.save({ name: 'Chile' });

  }

  findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async findOne(id: number): Promise<Country> {
    const country = await this.countryRepository.findOneBy({ id_country: id });
    if (!country) throw new NotFoundException(`Country with ID ${id} not found`);
    return country;
  }

  async update(id: number, dto: UpdateCountryDto): Promise<Country> {
    await this.findOne(id);
    await this.countryRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.countryRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Country with ID ${id} not found`);
  }
}