import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RegistroProducto } from './registro-producto.entity';

@Entity('persona')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'id_persona' })
  id: number;

  @Column()
  nombre: string;

  @Column()
  cargo: string;

  @Column ({nullable: true})
  email?:string;

@OneToMany(() => RegistroProducto, (r) => r.persona_despacha)
  despachos: RegistroProducto[];
@OneToMany(() => RegistroProducto, (r) => r.persona_recibe)
  recepciones: RegistroProducto[];

}