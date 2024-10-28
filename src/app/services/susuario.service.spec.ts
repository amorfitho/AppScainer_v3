import { TestBed } from '@angular/core/testing';

import { SUsuarioService } from './susuario.service';

describe('SUsuarioService', () => {
  let service: SUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
