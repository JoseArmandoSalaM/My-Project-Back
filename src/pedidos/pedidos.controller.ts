import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Controller('pedidos')
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Post()
   create(@Body() createPedidoDto: CreatePedidoDto) {

      return this.pedidosService.create(createPedidoDto);
   
  }

  @Get()
  async findAll() {
    
      const pedidos = await this.pedidosService.findAll();

     if(!pedidos || pedidos.length === 0) return 'Error'

     return pedidos;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.pedidosService.findOne(id);

    if(!user) return 'No se encontro el pedido';

    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoDto: UpdatePedidoDto) {

    try {
      return this.pedidosService.update(id, updatePedidoDto);
    } catch (error) {
      return 'Error';
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {

    try {
      const user = await this.pedidosService.remove(id);
      return 'Success';
    } catch (error) {
      return 'Error';
    }
  }
}
