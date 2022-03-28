import { TestBed } from '@angular/core/testing';

import { FormeleOpvolgingService } from './formele-opvolging.service';

describe('FormeleOpvolgingService', () => {
  let service: FormeleOpvolgingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormeleOpvolgingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
