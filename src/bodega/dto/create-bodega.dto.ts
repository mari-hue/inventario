import { IsNotEmpty, IsOptional, IsString, IsNumber, Length } from 'class-validator';

export class CreateBodegaDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @Length(1, 100)
  nombre: string;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  direccion?: string;

  @IsOptional()
  @IsString()
  @Length(0, 20)
  telefonoContacto?: string;

  @IsOptional()
  @IsNumber()
  encargadoId?: number;
}

/*
export class CreateBodegaDto {
  nombre: string;
  direccion?: string;
  telefonoContacto?: string;
  encargadoId?: number;
}
  */

