export class CreateRegistroProductoDto {
  fecha: Date;
  cantidad: number;
  serie_id?: string;
  equipo_arriendo_id?: string;
  observacion?: string;
  despacho_realizado?: string;
  ubicacion_actual?: string;
  id_producto: number;
  id_bodega_origen?: number;
  id_persona_despacha?: number;
  id_persona_recibe?: number;
  usuario_registra_id: number;
  id_tipo_movimiento: number;
}
