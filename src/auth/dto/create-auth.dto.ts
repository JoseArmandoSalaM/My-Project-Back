import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateAuthDto {

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(1)
    name: string

    @IsEmail()
    email: string
    
    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    password: string
}
