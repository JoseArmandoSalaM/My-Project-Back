import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login-auth';
import { AuthGuard } from './guard/auth.guard';
import { Request } from 'express';
import { Role } from 'src/enums/role.enum';
import { Auth } from './decorators/auth.decorator';
import { ActiveUser } from './decorators/active-user.decorator';
import { UserActiveInterface } from 'src/interfaces/user-active.interface';




@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll() {
    return this.authService.findAll();

  }

   
  @Get('profile')
  @Auth(Role.USER, Role.ADMIN)
  // @Roles(Role.ADMIN)
  // @UseGuards(AuthGuard, RolesGuard)
  profile(@ActiveUser() user: UserActiveInterface){
    return this.authService.profile(user);
  }

  
  @Get(':id')
  @Auth(Role.USER, Role.ADMIN)
  async findOne(@Param('id') id: string) {
  
    const user =  await this.authService.findOne(id);

    if(!user) return 'Error';

    return user;
  }

  @Patch(':id')
  @Auth(Role.USER, Role.ADMIN)
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto, @ActiveUser() user: UserActiveInterface) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.authService.remove(id);
    } catch (error) {
      return 'Error'
    }
  }

  @Post('login')
  login(@Body() loginDto: LoginDto){
    return this.authService.login(loginDto);
  }
  
}
