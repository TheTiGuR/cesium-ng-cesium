import { TestBed } from '@angular/core/testing';

import { NgMapsService } from './ng-maps.service';

describe('NgMapsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgMapsService = TestBed.get(NgMapsService);
    expect(service).toBeTruthy();
  });
});
