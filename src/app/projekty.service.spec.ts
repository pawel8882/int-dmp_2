import { TestBed } from '@angular/core/testing';

import { ProjektyService } from './projekty.service';

describe('ProjektyService', () => {
  let service: ProjektyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjektyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
