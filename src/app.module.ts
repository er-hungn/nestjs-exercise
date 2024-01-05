import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy/dummy.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [DummyModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
