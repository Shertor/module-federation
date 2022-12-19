import { TestBed } from '@angular/core/testing';

import { ModulesImportService } from './modules-import.service';

describe('ModulesImportService', () => {
  let service: ModulesImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModulesImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
