import { Injectable } from '@nestjs/common';
import { CreateNotifyUserDto } from './dto/create-notify_user.dto';
import { UpdateNotifyUserDto } from './dto/update-notify_user.dto';

@Injectable()
export class NotifyUserService {
  create(createNotifyUserDto: CreateNotifyUserDto) {
    return 'This action adds a new notifyUser';
  }

  findAll() {
    return `This action returns all notifyUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} notifyUser`;
  }

  update(id: number, updateNotifyUserDto: UpdateNotifyUserDto) {
    return `This action updates a #${id} notifyUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} notifyUser`;
  }
}
