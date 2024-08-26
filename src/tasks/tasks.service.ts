import { BadRequestException, HttpException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';
import { error } from 'console';
import { NotFoundError } from 'rxjs';


@Injectable()
export class TasksService {

  constructor(private prisma: PrismaService) {}

  create(task: CreateTaskDto) {
    const newTask= this.prisma.task.create({data: task});
  return newTask;
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: string)  {
   return this.prisma.task.findFirst({
      where: {id},
    });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: {id},
      data: updateTaskDto
    });
  }

  remove(id: string) {
    return this.prisma.task.delete({
      where: {id}
    }); 
  }
}
