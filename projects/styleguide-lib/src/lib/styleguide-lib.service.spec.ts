import { TestBed } from '@angular/core/testing';

import { StyleguideLibService } from './styleguide-lib.service';

describe('StyleguideLibService', () => {
  let service: StyleguideLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StyleguideLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
