import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoTipo } from './movimiento_tipo';

@Injectable()
export class MovimientoTipoSeeder implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(MovimientoTipo)
    private movimientoRepo: Repository<MovimientoTipo>,
  ) {}

  async onApplicationBootstrap() {
    const tipos = ['ingreso', 'despacho'];
    for (const nombre of tipos) {
      const existe = await this.movimientoRepo.findOneBy({ nombre });
      if (!existe) {
        const nuevo = this.movimientoRepo.create({ nombre });
        await this.movimientoRepo.save(nuevo);
      }
    }
  }
}
