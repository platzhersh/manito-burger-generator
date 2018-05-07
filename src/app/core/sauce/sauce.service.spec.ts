/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SauceService } from './sauce.service';

describe('Service: Sauce', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SauceService]
    });
  });

  it('should ...', inject([SauceService], (service: SauceService) => {
    expect(service).toBeTruthy();
  }));
});
