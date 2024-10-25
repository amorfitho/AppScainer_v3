import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuPage } from './recu.page';

describe('RecuPage', () => {
  let component: RecuPage;
  let fixture: ComponentFixture<RecuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
