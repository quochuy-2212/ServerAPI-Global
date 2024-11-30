// nơi gọi ra các phương thức API user

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  // Lấy thông tin người dùng đầu tiên
  async getFirstUser(): Promise<User> {
    return this.userModel.findOne().exec(); // Trả về người dùng đầu tiên
  }
  // Thêm người dùng
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
}
