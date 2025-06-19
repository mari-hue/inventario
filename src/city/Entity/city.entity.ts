import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Region } from '../../region/entity/region.entity';
import { Country } from '../../country/entity/country.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id_city: number;

  @Column()
  name: string;

  @ManyToOne(() => Region, (region) => region.cities)
  region: Region;

  @ManyToOne(() => Country, (country) => country.cities)
  country: Country;
}
