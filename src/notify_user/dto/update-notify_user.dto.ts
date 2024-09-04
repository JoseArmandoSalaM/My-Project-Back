import { PartialType } from '@nestjs/mapped-types';
import { CreateNotifyUserDto } from './create-notify_user.dto';

export class UpdateNotifyUserDto extends PartialType(CreateNotifyUserDto) {}
