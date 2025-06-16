import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoTipo } from '../entities/movimiento_tipo.entity';
import { MovimientoTipoService } from '../movimiento_tipo/movimiento_tipo.service';
import { MovimientoTipoController } from '../movimiento_tipo/movimiento_tipo.controller';
import { MovimientoTipoSeeder } from '../seed';

@Module({
  imports: [TypeOrmModule.forFeature([MovimientoTipo])],
  providers: [MovimientoTipoService, MovimientoTipoSeeder],
  controllers: [MovimientoTipoController],
  exports: [MovimientoTipoService],
})
export class MovimientoTipoModule {}
