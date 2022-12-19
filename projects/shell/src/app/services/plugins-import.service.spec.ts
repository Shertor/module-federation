import { TestBed } from '@angular/core/testing';

import { PluginsImportService } from './plugins-import.service';

describe('PluginsImportService', () => {
  let service: PluginsImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginsImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
