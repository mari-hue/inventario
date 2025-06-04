import { Module } from '@nestjs/common';
import { RegistroProductoService } from './registro-producto.service';
import { RegistroProductoController } from './registro-producto.controller';

@Module({
  controllers: [RegistroProductoController],
  providers: [RegistroProductoService],
})
export class RegistroProductoModule {}
