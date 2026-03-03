import { TestBed } from '@angular/core/testing';

import { ComidaService } from './comida';

describe('Comida', () => {
  let service: ComidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
