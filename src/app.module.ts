import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { TipoProducto } from './entities/tipo-producto.entity';
import { Bodega } from './entities/bodega.entity';
import { RegistroProducto } from './entities/registro-producto.entity';
import { Stock } from './entities/stock.entity';
import { Persona } from './entities/persona.entity';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.66.20.19',
      port: 3306,
      username: 'root',
      password: '1234',     //'TM@gF2l#JOs1',
      database: 'inventario_ips_cha',
      entities: [Producto, TipoProducto, Bodega, RegistroProducto, Stock, Persona],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Producto, TipoProducto, Bodega, RegistroProducto, Stock, Persona]),
  ],
})
export class AppModule {}

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
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductoModule,
    BodegaModule,
    TipoProductoModule,
  ],

})
export class AppModule {}