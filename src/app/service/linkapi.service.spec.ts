import { TestBed } from '@angular/core/testing';

import { LinkapiService } from './linkapi.service';

describe('LinkapiService', () => {
  let service: LinkapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
