import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Country } from '../../country/entity/country.entity';
import { City } from '../../city/Entity/city.entity';

@Entity('regions')
export class Region {
  @PrimaryGeneratedColumn()
  id_region: number;

  @Column()
  name: string;

  @ManyToOne(() => Country, (country) => country.regions)
  country: Country;

  @OneToMany(() => City, (city) => city.region)
  cities: City[];
}
