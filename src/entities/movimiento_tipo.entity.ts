import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RegistroProducto } from './registro-producto.entity';

@Entity('movimiento_tipo')
export class MovimientoTipo {
  @PrimaryGeneratedColumn({ name: 'id_tipo' })
  id: number;

  @Column({ length: 20, unique: true })
  nombre: string;

  @OneToMany(() => RegistroProducto, (registro) => registro.tipo_movimiento)
  registros: RegistroProducto[];
}
