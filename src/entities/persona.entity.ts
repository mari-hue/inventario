import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
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
  email?:String;


}