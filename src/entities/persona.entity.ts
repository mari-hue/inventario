import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Bodega } from './bodega.entity';
import { RegistroProducto } from './registro-producto.entity';

@Entity('persona')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'id_persona' })
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 100, nullable: true })
  cargo: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ length: 20, nullable: true })
  rut: string;

  @Column({ name: 'fecha_creacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaCreacion: Date;

  @OneToMany(() => Bodega, (bodega) => bodega.encargado)
  bodegasEncargadas: Bodega[];

  @OneToMany(() => RegistroProducto, (registro) => registro.persona_despacha)
  registros_despacho: RegistroProducto[];


  @OneToMany(() => RegistroProducto, (registro) => registro.persona_recibe)
  recepciones: RegistroProducto[];

  @OneToMany(() => RegistroProducto, (registro) => registro.usuarioRegistra)
  registrosCreados: RegistroProducto[];






}