import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PedidosService {

  constructor(private prisma: PrismaService) {}


  create(dto: CreatePedidoDto) {
    const pedido = this.prisma.pedidos.create({
      data: {
      Status: dto.Status,
      Fecha_prestamos: dto.Fecha_prestamos,
      Fecha_devolucion: dto.Fecha_devolucion,
      User: { connect: { id: dto.User } },  // Conectar con el usuario usando el ID
  },})

  return pedido;
  }

  findAll() {
    return this.prisma.pedidos.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
