import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ToolsModule } from './tools/tools.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { NotifyUserModule } from './notify_user/notify_user.module';

@Module({
  imports: [TasksModule, AuthModule, ToolsModule, PedidosModule, NotifyUserModule],
})
export class AppModule {}
