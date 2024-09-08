import { PartialType } from '@nestjs/mapped-types';
import { CreateToolDto } from './create-tool.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateToolDto extends PartialType(CreateToolDto) {

    @IsString()
    @IsOptional()
    Name?: string

    @IsInt()
    @IsOptional()
    Cantidad_disponible?: number
}
