import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('bodega')
export class Bodega {
  @PrimaryGeneratedColumn({ name: 'id_bodega' })
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;
}