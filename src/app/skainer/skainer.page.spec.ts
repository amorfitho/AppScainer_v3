import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkainerPage } from './skainer.page';

describe('SkainerPage', () => {
  let component: SkainerPage;
  let fixture: ComponentFixture<SkainerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SkainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
