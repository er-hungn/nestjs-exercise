import { Test } from '@nestjs/testing';
import { DummyService } from './dummy.service';
import { dummyData } from './dummy-data';

describe('Test suite', () => {
  let dummyService: DummyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DummyService],
    }).compile();

    dummyService = module.get<DummyService>(DummyService);
  });

  it('should be defined', () => {
    expect(dummyService).toBeDefined();
  });

  describe('getData', () => {
    it('should return a list of data', () => {
      expect(dummyService.getData()).toEqual(dummyData);
    });
  });
});
