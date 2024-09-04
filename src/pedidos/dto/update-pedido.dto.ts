import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {

    @IsString()
    @IsNotEmpty()
    Status:           string
  

    
    @IsDate()
    @IsNotEmpty()
    Fecha_devolucion: Date

}
