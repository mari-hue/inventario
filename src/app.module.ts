import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductoModule } from './producto/producto.module';
import { BodegaModule } from './bodega/bodega.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
    type: process.env.DB_TYPE as any, // 'mysql' o 'mssql'
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    options: process.env.DB_TYPE === 'mssql' ? { encrypt: false } : undefined,
  }),

    ProductoModule,
    BodegaModule,
    TipoProductoModule,
  ],

})
export class AppModule {}