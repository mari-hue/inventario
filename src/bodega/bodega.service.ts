import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bodega } from './entities/bodega.entity'; // Assuming Bodega entity path
import { CreateBodegaDto } from './dto/create-bodega.dto';
import { UpdateBodegaDto } from './dto/update-bodega.dto';

@Injectable()
export class BodegaService {
  constructor(
    @InjectRepository(Bodega)
    private readonly bodegaRepository: Repository<Bodega>,
  ) {}

  async create(createBodegaDto: CreateBodegaDto): Promise<Bodega> {
    const bodega = this.bodegaRepository.create(createBodegaDto);
    return this.bodegaRepository.save(bodega);
  }

  async findAll(): Promise<Bodega[]> {
    return this.bodegaRepository.find();
  }

  async findOne(id: number): Promise<Bodega> {
    const bodega = await this.bodegaRepository.findOneBy({ id });
    if (!bodega) {
      throw new NotFoundException(`Bodega con ID ${id} no encontrado`);
    }
    return bodega;
  }

  async update(id: number, updateBodegaDto: UpdateBodegaDto): Promise<Bodega> {
    const bodega = await this.findOne(id); // Check if bodega exists
    this.bodegaRepository.merge(bodega, updateBodegaDto);
    return this.bodegaRepository.save(bodega);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bodegaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bodega con ID ${id} no encontrado`);
    }
  }
}
