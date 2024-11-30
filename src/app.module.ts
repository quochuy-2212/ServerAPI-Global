import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // Cấu hình ConfigModule để load file .env
    ConfigModule.forRoot({
      isGlobal: true, // Đặt là true để biến môi trường có thể sử dụng ở mọi nơi trong ứng dụng
    }),

    // kết nối đế mongo db atlas
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    // import các collection database
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// module gốc của ứng dụng
