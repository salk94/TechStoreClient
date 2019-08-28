import { TestBed } from '@angular/core/testing';

import { MagazziniService } from './magazzini.service';

describe('MagazziniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagazziniService = TestBed.get(MagazziniService);
    expect(service).toBeTruthy();
  });
});
