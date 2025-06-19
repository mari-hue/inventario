import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Region } from '../../region/entity/region.entity';
import { City } from '../../city/Entity/city.entity';

@Entity('countries')
export class Country {
  @PrimaryGeneratedColumn()
  id_country: number;

  @Column()
  name: string;

  @OneToMany(() => Region, (region) => region.country)
  regions: Region[];

  @OneToMany(() => City, (city) => city.country)
  cities: City[];
}
