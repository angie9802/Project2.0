import { TestBed } from '@angular/core/testing';

import { ComApiService } from './com-api.service';

describe('ComApiService', () => {
  let service: ComApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
