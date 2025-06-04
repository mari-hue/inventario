import { Injectable } from '@nestjs/common';
import { CreateRegistroProductoDto } from './dto/create-registro-producto.dto';
import { UpdateRegistroProductoDto } from './dto/update-registro-producto.dto';

@Injectable()
export class RegistroProductoService {
  create(createRegistroProductoDto: CreateRegistroProductoDto) {
    return 'This action adds a new registroProducto';
  }

  findAll() {
    return `This action returns all registroProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroProducto`;
  }

  update(id: number, updateRegistroProductoDto: UpdateRegistroProductoDto) {
    return `This action updates a #${id} registroProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroProducto`;
  }
}
