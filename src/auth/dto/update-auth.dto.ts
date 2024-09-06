import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    @IsString()
    @IsOptional()
    name?: string

    @IsEmail()
    @IsOptional()
    email?: string
}
