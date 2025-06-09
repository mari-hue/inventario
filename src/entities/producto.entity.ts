import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoProducto } from './tipo-producto.entity';
import { Persona } from './persona.entity'; 


@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'id_producto' })
  id: number;

  @Column()
  modelo: string;

  @Column()
  marca: string;

  @ManyToOne(() => TipoProducto, (tipo) => tipo.productos)
  @JoinColumn({ name: 'id_tipo_producto' })
  tipoProducto: TipoProducto;

  @ManyToOne(() => Persona)
  @JoinColumn({ name: 'id_persona_despacha'})
  personaDespacha: Persona;

  @ManyToOne (() => Persona)
  @JoinColumn({ name: 'id_persona_recibe' })
  personaRecibe: Persona;

}
