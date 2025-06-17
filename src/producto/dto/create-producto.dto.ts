export class CreateProductoDto {
  modelo: string;
  marca: string;
  serie_id: string;
  estado?: string;
  fecha_ingreso?: Date;
  id_tipo_producto: number;
}
