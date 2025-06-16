import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductoModule } from './producto/producto.module';
import { BodegaModule } from './bodega/bodega.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        console.log('DB_TYPE:', config.get('DB_TYPE')); 

        return {
          type: config.get<string>('DB_TYPE') as any,
          host: config.get<string>('DB_HOST'),
          port: parseInt(config.get<string>('DB_PORT') || '5432', 10),
          username: config.get<string>('DB_USER'),
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_NAME'),
          synchronize: config.get<string>('DB_SYNCHRONIZE') === 'true',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
        };
      },
    }),

    ProductoModule,
    BodegaModule,
    TipoProductoModule,
    PersonaModule,
  ],
})
export class AppModule {}
