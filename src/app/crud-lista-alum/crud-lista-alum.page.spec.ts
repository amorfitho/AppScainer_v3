import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListaAlumPage } from './crud-lista-alum.page';

describe('CrudListaAlumPage', () => {
  let component: CrudListaAlumPage;
  let fixture: ComponentFixture<CrudListaAlumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudListaAlumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
