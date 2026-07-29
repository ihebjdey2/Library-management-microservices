import { TestBed } from '@angular/core/testing';

import { EmrpruntService } from './emrprunt.service';

describe('EmrpruntService', () => {
  let service: EmrpruntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmrpruntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
