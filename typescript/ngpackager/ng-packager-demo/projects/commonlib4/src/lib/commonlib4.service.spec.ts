import { TestBed } from '@angular/core/testing';

import { Commonlib4Service } from './commonlib4.service';

describe('Commonlib4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Commonlib4Service = TestBed.get(Commonlib4Service);
    expect(service).toBeTruthy();
  });
});
