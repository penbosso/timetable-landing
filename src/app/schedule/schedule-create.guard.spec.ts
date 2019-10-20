import { TestBed, async, inject } from '@angular/core/testing';

import { ScheduleCreateGuard } from './schedule-create.guard';

describe('ScheduleCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleCreateGuard]
    });
  });

  it('should ...', inject([ScheduleCreateGuard], (guard: ScheduleCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
