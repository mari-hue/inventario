import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Bodega } from '../../bodega/entities/bodega.entity';

@Entity('stock')
export class Stock {
  @PrimaryGeneratedColumn({ name: 'id_stock' })
  id: number;

  @ManyToOne(() => Producto, (producto) => producto.stock)
  producto: Producto;

  @ManyToOne(() => Bodega, (bodega) => bodega.stock)
  bodega: Bodega;

  @Column()
  cantidad: number;
}
