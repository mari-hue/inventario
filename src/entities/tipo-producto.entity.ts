import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from './producto.entity';

@Entity('tipo_producto')
export class TipoProducto {
  @PrimaryGeneratedColumn()
  id_tipo_producto: number;

  @Column({ unique: true })
  nombre: string;

  @OneToMany(() => Producto, (producto) => producto.tipoProducto)
  productos: Producto[];
}