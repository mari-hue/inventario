import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProductoService } from './registro-producto.service';
import { CreateRegistroProductoDto } from './dto/create-registro-producto.dto';
import { UpdateRegistroProductoDto } from './dto/update-registro-producto.dto';

@Controller('registro-producto')
export class RegistroProductoController {
  constructor(private readonly registroProductoService: RegistroProductoService) {}

  @Post()
  create(@Body() createRegistroProductoDto: CreateRegistroProductoDto) {
    return this.registroProductoService.create(createRegistroProductoDto);
  }

  @Get()
  findAll() {
    return this.registroProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroProductoDto: UpdateRegistroProductoDto) {
    return this.registroProductoService.update(+id, updateRegistroProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroProductoService.remove(+id);
  }
}
