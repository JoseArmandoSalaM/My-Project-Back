import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateToolDto {

    @IsString()
    @IsNotEmpty()
    Name: string

    @IsInt()
    @IsNotEmpty()
    Cantidad_disponible: number

}
