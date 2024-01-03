import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [DummyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
