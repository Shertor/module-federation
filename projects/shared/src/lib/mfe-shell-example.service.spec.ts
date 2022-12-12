import { TestBed } from '@angular/core/testing';

import { MfeShellExampleService } from './mfe-shell-example.service';

describe('MfeShellExampleService', () => {
  let service: MfeShellExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeShellExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
