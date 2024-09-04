import { PartialType } from '@nestjs/mapped-types';
import { CreateToolDto } from './create-tool.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateToolDto extends PartialType(CreateToolDto) {

    @IsString()
    Name?: string

    @IsInt()
    Cantidad_disponible?: number
}
