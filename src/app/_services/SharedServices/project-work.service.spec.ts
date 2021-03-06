import { TestBed } from '@angular/core/testing';

import { ProjectWorkService } from './project-work.service';

describe('ProjectWorkService', () => {
  let service: ProjectWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
