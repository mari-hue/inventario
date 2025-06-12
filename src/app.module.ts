import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ProductoModule } from './producto/producto.module';
import { BodegaModule } from './bodega/bodega.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '1433', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      extra: {
        trustServerCertificate: true,
        encrypt: false,
      },
    }),
    ProductoModule,
    BodegaModule,
    TipoProductoModule,
    PersonaModule,
  ],
})
export class AppModule {}
