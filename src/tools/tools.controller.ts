import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { Role } from 'src/enums/role.enum';

@Auth(Role.USER)
@UseGuards(AuthGuard, RolesGuard)
@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Post()
  async create(@Body() createToolDto: CreateToolDto) {
    try {
      return await this.toolsService.create(createToolDto);
    } catch (error) {
      return 'La herramienta ya existe';
    }
  }

  @Get()
  async findAll() {
   const tools = await this.toolsService.findAll();

   if(!tools || tools.length === 0) return 'No hay herramientas';
   
   return tools;
  }
  
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tool = await this.toolsService.findOne(id);

    if(!tool) return 'No se encontro la herramienta';

    return tool;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateToolDto: UpdateToolDto) {
    
    try {
      return await this.toolsService.update(id, updateToolDto);
    } catch (error) {
      return 'No se encotro la herramienta';
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const tool = await this.toolsService.remove(id);

    if(!tool) return 'No se puedo eliminar';

    return 'Success'
  }
}
