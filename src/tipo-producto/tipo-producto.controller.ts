import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoProductoService } from './tipo-producto.service';
import { CreateTipoProductoDto } from './dto/create-tipo-producto.dto';
import { UpdateTipoProductoDto } from './dto/update-tipo-producto.dto';

@Controller('tipo-producto')
export class TipoProductoController {
  constructor(private readonly tipoProductoService: TipoProductoService) {}

  @Post()
  create(@Body() createTipoProductoDto: CreateTipoProductoDto) {
    return this.tipoProductoService.create(createTipoProductoDto);
  }

  @Get()
  findAll() {
    return this.tipoProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoProductoDto: UpdateTipoProductoDto) {
    return this.tipoProductoService.update(+id, updateTipoProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoProductoService.remove(+id);
  }
}
