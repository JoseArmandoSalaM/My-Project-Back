import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreatePedidoDto {

  @IsString()
  @IsNotEmpty()
  Status:           string

  @IsDate()
  @IsNotEmpty()
  Fecha_prestamos:  Date
  
  @IsDate()
  @IsNotEmpty()
  Fecha_devolucion: Date

  @IsString()
  User: string

}
