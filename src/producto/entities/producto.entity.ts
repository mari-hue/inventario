import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { TipoProducto } from './../../tipo-producto/entities/tipo-producto.entity';
import { RegistroProducto } from '../../registro-producto/entities/registro-producto.entity';
import { Stock } from './../../stock/entities/stock.entity';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id: number;

  @Column({ length: 100, nullable: true })
  modelo: string;

  @Column({ length: 100, nullable: true })
  marca: string;

  @Column({ name: 'serie_id', length: 100, unique: true })
  serieId: string;

  @Column({ length: 20, default: 'nuevo' })
  estado: 'nuevo' | 'usado' | 'en baja';

  @Column({ name: 'fecha_ingreso', type: 'date', nullable: true })
  fechaIngreso: Date;

  @ManyToOne(() => TipoProducto, (tipo) => tipo.productos)
  tipoProducto: TipoProducto;

  @OneToMany(() => Stock, (stock) => stock.producto)
  stock: Stock[];

  @OneToMany(() => RegistroProducto, (registro) => registro.producto)
  registros: RegistroProducto[];
}
