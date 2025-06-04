import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../../entities/producto.entity';

@Entity('tipo_producto')
export class TipoProducto {
  @PrimaryGeneratedColumn({ name: 'id_tipo_producto' })
  id: number;

  @Column({ unique: true })
  nombre: string;

  @OneToMany(() => Producto, (producto) => producto.tipoProducto)
  productos: Producto[];
}
