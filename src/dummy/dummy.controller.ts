import { Dummy } from './dummy-data';
import { DummyService } from './dummy.service';
import { Controller, Get } from '@nestjs/common';

@Controller('dummy')
export class DummyController {
  constructor(private dummyService: DummyService) {}

  @Get()
  getData(): Dummy[] {
    return this.dummyService.getData();
  }
}
