import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudListaPage } from './crud-lista.page';

describe('CrudListaPage', () => {
  let component: CrudListaPage;
  let fixture: ComponentFixture<CrudListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
