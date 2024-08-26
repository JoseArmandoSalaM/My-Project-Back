import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";


export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    title:       string
    @IsString()
    @IsNotEmpty()
    description: string
    @IsBoolean()
    done: boolean
}
