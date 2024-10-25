import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudModiPage } from './crud-modi.page';

describe('CrudModiPage', () => {
  let component: CrudModiPage;
  let fixture: ComponentFixture<CrudModiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
