import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimientoTipoDto } from './create-movimiento-tipo.dto';



export class UpdatePersonaDto extends PartialType(CreateMovimientoTipoDto) {}
