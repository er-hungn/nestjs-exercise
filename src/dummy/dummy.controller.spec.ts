import { Test } from '@nestjs/testing';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';
import { Dummy } from './dummy-data';

const mockDummyData: Dummy[] = [
  { id: 21, full_name: 'Izak Dominik', gender: 'Male', age: 26 },
  { id: 22, full_name: 'Fanya Garlick', gender: 'Female', age: 39 },
  { id: 23, full_name: 'Quint Renak', gender: 'Male', age: 31 },
  { id: 24, full_name: 'Kissee Wolver', gender: 'Female', age: 25 },
  { id: 25, full_name: 'Annmarie Jimeno', gender: 'Female', age: 41 },
  { id: 26, full_name: 'Lew Hynes', gender: 'Male', age: 39 },
  { id: 27, full_name: 'Kristoffer Livezey', gender: 'Male', age: 21 },
  { id: 28, full_name: 'Laird Ormshaw', gender: 'Male', age: 47 },
  { id: 29, full_name: 'Becky Durnford', gender: 'Female', age: 20 },
  { id: 30, full_name: 'Korney Brownett', gender: 'Female', age: 26 },
];

describe('DummyController', () => {
  let dummyController: DummyController;
  let dummyService: DummyService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [DummyController],
      providers: [
        {
          provide: DummyService,
          useValue: {
            getData: jest.fn().mockReturnValue(mockDummyData),
          },
        },
      ],
    }).compile();

    dummyService = module.get<DummyService>(DummyService);
    dummyController = module.get<DummyController>(DummyController);
  });

  describe('getData', () => {
    it('should return a list of data', async () => {
      expect(dummyController.getData()).toBe(mockDummyData);
      expect(dummyService.getData).toHaveBeenCalledTimes(1);
    });
  });
});
