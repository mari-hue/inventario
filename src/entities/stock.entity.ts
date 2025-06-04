import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique, JoinColumn } from 'typeorm';
import { Producto } from './producto.entity';
import { Bodega } from './bodega.entity';

@Entity('stock')
@Unique(['producto', 'bodega'])
export class Stock {
  @PrimaryGeneratedColumn({ name: 'id_stock' })
  id: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;

  @ManyToOne(() => Bodega)
  @JoinColumn({ name: 'id_bodega' })
  bodega: Bodega;

  @Column({ type: 'int' })
  cantidad: number;
}