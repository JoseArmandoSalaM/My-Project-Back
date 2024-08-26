import { Controller, ConflictException,HttpCode, NotFoundException, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    try {
      return this.tasksService.create(createTaskDto);
    } catch (error) {
      if(error.code === 11000){
        throw new ConflictException('Task already exists');
      }
      throw error;
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
