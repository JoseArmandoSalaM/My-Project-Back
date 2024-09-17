import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateToolDto {

    @IsString()
    @IsNotEmpty()
    Name: string

    @IsInt()
    @IsNotEmpty()
    @Type(() => Number)
    Cantidad_disponible: number

}
