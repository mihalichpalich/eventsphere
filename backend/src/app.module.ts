import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EventModule } from './event/event.module';

@Module({
    imports: [
        ConfigModule.forRoot(), // Подключение конфигурационного модуля
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGO_URI'),
            }),
            inject: [ConfigService],
        }),
        EventModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
