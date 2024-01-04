import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy/dummy.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DummyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
