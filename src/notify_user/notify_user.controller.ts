import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotifyUserService } from './notify_user.service';
import { CreateNotifyUserDto } from './dto/create-notify_user.dto';
import { UpdateNotifyUserDto } from './dto/update-notify_user.dto';

@Controller('notify-user')
export class NotifyUserController {
  constructor(private readonly notifyUserService: NotifyUserService) {}

  @Post()
  create(@Body() createNotifyUserDto: CreateNotifyUserDto) {
    return this.notifyUserService.create(createNotifyUserDto);
  }

  @Get()
  findAll() {
    return this.notifyUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notifyUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotifyUserDto: UpdateNotifyUserDto) {
    return this.notifyUserService.update(+id, updateNotifyUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notifyUserService.remove(+id);
  }
}
