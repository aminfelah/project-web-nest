import { Test, TestingModule } from '@nestjs/testing';
import { BookingOrderService } from './booking-order.service';

describe('BookingOrderService', () => {
  let service: BookingOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingOrderService],
    }).compile();

    service = module.get<BookingOrderService>(BookingOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
