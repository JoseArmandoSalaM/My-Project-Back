import { Module } from '@nestjs/common';
import { NotifyUserService } from './notify_user.service';
import { NotifyUserController } from './notify_user.controller';

@Module({
  controllers: [NotifyUserController],
  providers: [NotifyUserService],
})
export class NotifyUserModule {}
