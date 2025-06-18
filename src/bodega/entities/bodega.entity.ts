import { Entity,PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';
import { Stock } from '../../stock/entities/stock.entity';
import { RegistroProducto } from '../../registro-producto/entities/registro-producto.entity';

@Entity('bodega')
export class Bodega {
  @PrimaryGeneratedColumn({ name: 'id_bodega' })
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  direccion: string;

  @Column({ name: 'telefono_contacto', length: 20, nullable: true })
  telefonoContacto: string;

  // Relación con Persona (encargado)
  @ManyToOne(() => Persona, (persona) => persona.bodegasEncargadas)
  @JoinColumn({ name: 'encargado_id' })
  encargado: Persona;

  // Relación con Stock
  @OneToMany(() => Stock, (stock) => stock.bodega)
  stock: Stock[];

  // Relación con RegistroProducto (origen del movimiento)
  @OneToMany(() => RegistroProducto, (registro) => registro.bodegaOrigen)
  registros: RegistroProducto[];
}
