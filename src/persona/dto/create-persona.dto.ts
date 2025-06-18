import { IsNotEmpty, IsOptional, IsString, IsEmail, Length, Matches } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  @Length(1, 50)
  nombre: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  @Length(1, 50)
  apellido: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  cargo?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  email?: string;

  @IsOptional()
  @IsString()
  @Length(0, 20)
  telefono?: string;

  @IsOptional()
  @IsString()
  @Length(7, 12, { message: 'El RUT debe tener entre 7 y 12 caracteres.' })
  @Matches(/^\d{7,8}-[kK0-9]$/, { message: 'El RUT debe tener el formato 12345678-9 o 12345678-K.' })
  rut?: string;
}
