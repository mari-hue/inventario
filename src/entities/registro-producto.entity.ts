import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.entity';
import { Bodega } from './bodega.entity';

@Entity('registro_producto')
export class RegistroProducto {
  @PrimaryGeneratedColumn({ name: 'id_registro_producto' })
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;

  @Column()
  cantidad: number;

  @Column({ nullable: true })
  serie_id: string;

  @Column({ nullable: true })
  equipo_arriendo_id: string;

  @Column({ nullable: true })
  observacion: string;

  @Column()
  tipo_movimiento: 'ingreso' | 'despacho';

  @ManyToOne(() => Bodega)
  @JoinColumn({ name: 'id_bodega_origen' })
  bodega_origen: Bodega;

  @Column({ default: false })
  despacho_realizado: boolean;

  @Column({ nullable: true })
  ubicacion_actual: string;
}