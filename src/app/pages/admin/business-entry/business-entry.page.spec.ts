import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinessEntryPage } from './business-entry.page';

describe('BusinessEntryPage', () => {
  let component: BusinessEntryPage;
  let fixture: ComponentFixture<BusinessEntryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
