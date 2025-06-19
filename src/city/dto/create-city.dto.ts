import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCityDto {
  @IsNumber()
  @IsNotEmpty()
  id_region: number;

  @IsNumber()
  @IsNotEmpty()
  id_country: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
