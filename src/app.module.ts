import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { TipoProducto } from './entities/tipo-producto.entity';
import { Bodega } from './entities/bodega.entity';
import { RegistroProducto } from './entities/registro-producto.entity';
import { Stock } from './entities/stock.entity';

@Module({
  imports: [
   TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'makelsin',
      database: 'inventario_ips_cha',
      entities: [Producto, TipoProducto, Bodega, RegistroProducto, Stock],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Producto, TipoProducto, Bodega, RegistroProducto, Stock]),
  ],
})
export class AppModule {}
