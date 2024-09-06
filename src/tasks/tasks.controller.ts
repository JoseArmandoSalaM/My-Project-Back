import { Controller, ConflictException,HttpCode, NotFoundException, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/enums/role.enum';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';



//@UseGuards(AuthGuard, RolesGuard)
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      return await this.tasksService.create(createTaskDto);
    } catch (error) {
        throw new ConflictException('Task already exists');
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.tasksService.findAll();
    } catch (error) {
      throw new ConflictException('Failed to get tasks')
    }
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
  
    const task = await this.tasksService.findOne(id);
    if(!task) throw new NotFoundException('Task no found');
    return task;
    
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
     
    const task = await this.tasksService.update(id, updateTaskDto);
     if(!task) throw new NotFoundException('Falied to update task');
     return task;
}

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
   
    const task = await this.tasksService.remove(id);
    if(!task) throw new NotFoundException('Failed to delete task');
    return task;
  }
}
