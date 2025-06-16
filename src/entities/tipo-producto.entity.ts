import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from './producto.entity';

@Entity('tipo_producto')
export class TipoProducto {
  @PrimaryGeneratedColumn({ name: 'id_tipo_producto' })
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @OneToMany(() => Producto, (producto) => producto.tipoProducto)
  productos: Producto[];
}
