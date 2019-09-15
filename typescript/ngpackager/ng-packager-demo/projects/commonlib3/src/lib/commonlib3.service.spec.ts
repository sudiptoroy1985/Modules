import { TestBed } from '@angular/core/testing';

import { Commonlib3Service } from './commonlib3.service';

describe('Commonlib3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Commonlib3Service = TestBed.get(Commonlib3Service);
    expect(service).toBeTruthy();
  });
});
