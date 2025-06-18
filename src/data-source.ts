import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { Persona } from './persona/entities/persona.entity';
import { TipoProducto } from './tipo-producto/entities/tipo-producto.entity';
// Agrega tus entidades aquí

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Persona, TipoProducto /* etc */],
  synchronize: true,
});
