import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroProductoDto } from './create-registro-producto.dto';

export class UpdateRegistroProductoDto extends PartialType(CreateRegistroProductoDto) {}
