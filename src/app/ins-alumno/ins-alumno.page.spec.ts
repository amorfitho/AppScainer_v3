import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsAlumnoPage } from './ins-alumno.page';

describe('InsAlumnoPage', () => {
  let component: InsAlumnoPage;
  let fixture: ComponentFixture<InsAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InsAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
