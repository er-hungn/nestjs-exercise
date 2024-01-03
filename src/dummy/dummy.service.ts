import { Injectable } from '@nestjs/common';
import { Dummy, dummyData } from './dummy-data';

@Injectable()
export class DummyService {
  private readonly data = dummyData;

  getData(): Dummy[] {
    return this.data;
  }
}
