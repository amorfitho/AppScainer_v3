import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ingresadoGuard } from './ingresado.guard';

describe('ingresadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ingresadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
