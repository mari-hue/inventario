import { IsInt, IsPositive } from 'class-validator';

export class CreateStockDto {
  @IsInt({ message: 'El id del producto debe ser un número entero' })
  id_producto: number;

  @IsInt({ message: 'El id de la bodega debe ser un número entero' })
  id_bodega: number;

  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @IsPositive({ message: 'La cantidad debe ser mayor que 0' })
  cantidad: number;
}
