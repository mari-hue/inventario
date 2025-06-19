import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRegionDto {
  @IsNumber()
  @IsNotEmpty()
  id_country: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}
