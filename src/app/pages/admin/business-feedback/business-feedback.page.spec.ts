import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessFeedbackPage } from './business-feedback.page';

describe('BusinessFeedbackPage', () => {
  let component: BusinessFeedbackPage;
  let fixture: ComponentFixture<BusinessFeedbackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
