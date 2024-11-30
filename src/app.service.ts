import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Đặng Quốc Huy';
  }
}

// service logic của controllers
