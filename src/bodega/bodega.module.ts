import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { BodegaService } from './bodega.service';
import { BodegaController } from './bodega.controller';
import { Bodega } from '../entities/bodega.entity'; // Import Bodega entity

@Module({
  imports: [TypeOrmModule.forFeature([Bodega])], // Add TypeOrmModule.forFeature
  controllers: [BodegaController],
  providers: [BodegaService],
})
export class BodegaModule {}
