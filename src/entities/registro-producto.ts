import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Producto } from './producto.entity';
import { Bodega } from './bodega.entity';
import { Persona } from './persona.entity';
import { MovimientoTipo } from './movimiento_tipo.entity';

@Entity('registro_producto')
export class RegistroProducto {
  @PrimaryGeneratedColumn({ name: 'id_registro_producto' })
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column()
  cantidad: number;

  @Column({ name: 'serie_id', length: 100, nullable: true })
  serieId: string;

  @Column({ name: 'equipo_arriendo_id', length: 100, nullable: true })
  equipoArriendoId: string;

  @Column({ nullable: true, type: 'text' })
  observacion: string;

  @Column({ name: 'despacho_realizado', length: 255, nullable: true })
  despachoRealizado: string;

  @Column({ name: 'ubicacion_actual', length: 255, nullable: true })
  ubicacionActual: string;

  @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @ManyToOne(() => Producto, (producto) => producto.registros)
  producto: Producto;

  @ManyToOne(() => Bodega, (bodega) => bodega.registros)
  bodegaOrigen: Bodega;

  @ManyToOne(() => Persona, (persona) => persona.despachos)
  personaDespacha: Persona;

  @ManyToOne(() => Persona, (persona) => persona.recepciones)
  personaRecibe: Persona;

  @ManyToOne(() => Persona, (persona) => persona.registrosCreados)
  usuarioRegistra: Persona;

  @ManyToOne(() => MovimientoTipo, (tipo) => tipo.registros)
  tipoMovimiento: MovimientoTipo;
}
