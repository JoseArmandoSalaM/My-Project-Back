import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToolsService {


  constructor(private prisma: PrismaService) {}

   create(createToolDto: CreateToolDto) {

    if (createToolDto.Cantidad_disponible) {
      createToolDto.Cantidad_disponible = Number(createToolDto.Cantidad_disponible);
  
      // Verificamos si la conversión fue exitosa
      if (isNaN(createToolDto.Cantidad_disponible)) {
        throw new Error('Cantidad_disponible debe ser un número válido');
      }
    }
     return this.prisma.tools.create({
      data: createToolDto
    })
  }

  findAll() {
    return this.prisma.tools.findMany();
  }

  findOne(id: string) {
    return this.prisma.tools.findFirst({
      where: {
        id
      }
    })
  }

  update(id: string, updateToolDto: UpdateToolDto) {

      // Convertimos 'Cantidad_disponible' a número si existe y es una cadena
  if (updateToolDto.Cantidad_disponible) {
    updateToolDto.Cantidad_disponible = Number(updateToolDto.Cantidad_disponible);

    // Verificamos si la conversión fue exitosa
    if (isNaN(updateToolDto.Cantidad_disponible)) {
      throw new Error('Cantidad_disponible debe ser un número válido');
    }
  }
    return this.prisma.tools.update({
      where:{id},
      data: updateToolDto
    })
  }

  remove(id: string) {
    return this.prisma.tools.delete({where:{id}})
  }
}
