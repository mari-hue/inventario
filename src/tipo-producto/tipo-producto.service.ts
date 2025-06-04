import { Injectable } from '@nestjs/common';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';

@Injectable()
export class TipoProductoService {
  create(createTipoProductoDto: CreateTipoProductoDto) {
    return 'This action adds a new tipoProducto';
  }

  findAll() {
    return `This action returns all tipoProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoProducto`;
  }

  update(id: number, updateTipoProductoDto: UpdateTipoProductoDto) {
    return `This action updates a #${id} tipoProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoProducto`;
  }
}
