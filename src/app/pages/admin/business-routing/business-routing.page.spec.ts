import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessRoutingPage } from './business-routing.page';

describe('BusinessRoutingPage', () => {
  let component: BusinessRoutingPage;
  let fixture: ComponentFixture<BusinessRoutingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessRoutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
