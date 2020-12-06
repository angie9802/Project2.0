import { TestBed } from '@angular/core/testing';

import { MachineIDService } from './machine-id.service';

describe('MachineIDService', () => {
  let service: MachineIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachineIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
