import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoTipo } from '../movimiento_tipo/entities/movimiento_tipo.entity';
import { MovimientoTipoService } from '../movimiento_tipo/movimiento_tipo.service';
import { MovimientoTipoController } from '../movimiento_tipo/movimiento_tipo.controller';


@Module({
  imports: [TypeOrmModule.forFeature([MovimientoTipo])],
  controllers: [MovimientoTipoController],
  exports: [MovimientoTipoService],
})
export class MovimientoTipoModule {}
