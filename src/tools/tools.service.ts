import { Injectable } from '@nestjs/common';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToolsService {


  constructor(private prisma: PrismaService) {}

   create(createToolDto: CreateToolDto) {
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
    return this.prisma.tools.update({
      where:{id},
      data: updateToolDto
    })
  }

  remove(id: string) {
    return this.prisma.tools.delete({where:{id}})
  }
}
