import { Controller, Get, Post, Body } from '@nestjs/common';
import { MovimientoTipoService } from './movimiento_tipo.service';

@Controller('movimiento-tipo')
export class MovimientoTipoController {
  constructor(private readonly service: MovimientoTipoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body('nombre') nombre: string) {
    return this.service.create(nombre);
  }
}
