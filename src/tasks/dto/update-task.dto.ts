import { IsBoolean, IsOptional, IsString, Max } from "class-validator";


export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string
    @IsString()
    @IsOptional()
    description?: string
    @IsBoolean()
    @IsOptional()
    done?: boolean
}
