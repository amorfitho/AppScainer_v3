import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IniPage } from './ini.page';

describe('IniPage', () => {
  let component: IniPage;
  let fixture: ComponentFixture<IniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
