/* eslint-disable */
import { Test, TestingModule } from '@nestjs/testing';
import { BookingOrderController } from './booking-order.controller';

describe('BookingOrderControllerController', () => {
  let controller: BookingOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingOrderController],
    }).compile();

    controller = module.get<BookingOrderController>(BookingOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
