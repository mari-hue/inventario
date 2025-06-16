import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoTipo } from '../entities/movimiento_tipo.entity';

@Injectable()
export class MovimientoTipoService {
  constructor(
    @InjectRepository(MovimientoTipo)
    private movimientoRepo: Repository<MovimientoTipo>,
  ) {}

  findAll() {
    return this.movimientoRepo.find();
  }

  create(nombre: string) {
    const nuevo = this.movimientoRepo.create({ nombre });
    return this.movimientoRepo.save(nuevo);
  }
}
