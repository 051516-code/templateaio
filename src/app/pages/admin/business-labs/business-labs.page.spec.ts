import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessLabsPage } from './business-labs.page';

describe('BusinessLabsPage', () => {
  let component: BusinessLabsPage;
  let fixture: ComponentFixture<BusinessLabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessLabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
